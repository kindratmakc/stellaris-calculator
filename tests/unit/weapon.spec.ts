import {Target} from "@/domain/target";
import {testWeapon, TestWeaponBuilder} from "./test-weapon";
import {DamageReport} from "@/domain/weapon";

describe('Weapon', () => {
  test('calculates average damage per hit correctly', () => {
    const weapon = testWeapon()
      .withMinDamage(5)
      .withMaxDamage(15)
      .build();

    expect(weapon.getAverageDamagePerHit()).toBe(10);
  });

  test('calculates average damage per day correctly', () => {
    const weapon = testWeapon()
      .withMinDamage(5)
      .withMaxDamage(15)
      .withCooldown(20)
      .build();

    expect(weapon.getAverageDamagePerDay()).toBe(5);
  });

  test('average damage calculated correctly', () => {
    const target = new Target(10, 10, 10, 0);
    const weapon = testWeapon()
      .withMinDamage(5)
      .withMaxDamage(15)
      .withCooldown(20)
      .build();

    const ttk = weapon.getDamageReport(target);

    expect(ttk).toStrictEqual(new DamageReport(40, 1, 1, 1));
  });

  test('damage remainder transferred to next layer of protection', () => {
    const target = new Target(15, 20, 20, 0);
    const weapon = testWeapon()
      .withMinDamage(20)
      .withMaxDamage(20)
      .withArmorDamageMultiplier(2)
      .withShieldDamageMultiplier(4)
      .withCooldown(20)
      .build();

    const ttk = weapon.getDamageReport(target);

    expect(ttk).toStrictEqual(new DamageReport(20, 0.25, 0.5, 0.75));
  });

  describe('hit chance', () => {
    test('accuracy capped at 100%', () => {
      const target = new Target(40, 30, 20, 0);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(10)
        .withMaxDamage(10)
        .withCooldown(10)
        .withAccuracy(200)
        .build();

      const damageReport = testWeapon.getDamageReport(target, 0, 15);

      expect(damageReport).toStrictEqual(new DamageReport(80, 2, 3, 4));
    });

    test('inaccurate weapon takes more time to kill', () => {
      const target = new Target(375, 250, 125, 74);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(1000)
        .withMaxDamage(1000)
        .withAccuracy(70)
        .withCooldown(100)
        .build();

      const damageReport = testWeapon.getDamageReport(target, 0, 5);

      expect(damageReport).toStrictEqual(new DamageReport(9900, 0.125, 0.25, 0.375));
    });

    test('tracking counters evasion', () => {
      const target = new Target(10, 10, 10, 20);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(10)
        .withMaxDamage(10)
        .withCooldown(10)
        .withAccuracy(50)
        .withTracking(25)
        .build();

      const damageReport = testWeapon.getDamageReport(target, 5);

      expect(damageReport).toStrictEqual(new DamageReport(50, 1, 1, 1));
    });

    test('tracking bonus adds up', () => {
      const target = new Target(10, 10, 10, 20);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(10)
        .withMaxDamage(10)
        .withCooldown(10)
        .withAccuracy(50)
        .withTracking(15)
        .build();

      const damageReport = testWeapon.getDamageReport(target, 15);

      expect(damageReport).toStrictEqual(new DamageReport(50, 1, 1, 1));
    });
  });

  describe('penetration', () => {
    test('full shield penetration', () => {
      const target = new Target(10, 10, 20, 0);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(5)
        .withMaxDamage(5)
        .withShieldPenetration(1.0)
        .build();

      const damageReport = testWeapon.getDamageReport(target);

      expect(damageReport).toStrictEqual(new DamageReport(30, 0, 2, 2));
    });

    test('full armor penetration', () => {
      const target = new Target(10, 10, 0, 0);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(5)
        .withMaxDamage(5)
        .withArmorPenetration(1.0)
        .build();

      const damageReport = testWeapon.getDamageReport(target);

      expect(damageReport).toStrictEqual(new DamageReport(10, 0, 0, 2));
    });

    test('full shield and armor penetration', () => {
      const target = new Target(10, 10, 20, 0);
      const testWeapon = new TestWeaponBuilder()
        .withMinDamage(5)
        .withMaxDamage(5)
        .withShieldPenetration(1.0)
        .withArmorPenetration(1.0)
        .withCooldown(10)
        .build();

      const damageReport = testWeapon.getDamageReport(target);

      expect(damageReport).toStrictEqual(new DamageReport(10, 0, 0, 2));
    });

    // test('partial shield penetration, kill before shields depleted', () => {
    //   const target = new Target(15, 15, 40, 0);
    //   const testWeapon = new TestWeaponBuilder()
    //     .withMinDamage(10)
    //     .withMaxDamage(10)
    //     .withShieldPenetration(0.75)
    //     .withCooldown(10)
    //     .build();

    //   const damageReport = testWeapon.getDamageReport(target);

    //   expect(damageReport).toStrictEqual(new DamageReport(30, 16, 2, 2));
    // });
    //
    // test('partial shield penetration, kill after shields depleted', () => {
    //   const target = new Target(15, 15, 5, 0);
    //   const testWeapon = new TestWeaponBuilder()
    //     .withMinDamage(10)
    //     .withMaxDamage(10)
    //     .withShieldPenetration(0.75)
    //     .build();
    //
    //   const ttk = testWeapon.timeToKill(target);
    //
    //   expect(ttk.timeToKillTicks).toBe(30);
    // });
  });
});

