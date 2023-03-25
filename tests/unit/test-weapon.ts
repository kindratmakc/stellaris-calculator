import {Size, Tech, Tier, Weapon} from "@/domain/weapon";

export function basicTestWeapon() {
  return testWeapon().build();
}

export class TestWeaponBuilder {
  name = 'Test Weapon';
  size = Size.Small;
  minDamage = 5;
  maxDamage = 15;
  accuracy = 100;
  tracking = 0;
  shieldDamageMultiplier = 1;
  armorDamageMultiplier = 1;
  hullDamageMultiplier = 1;
  shieldPenetration = 0;
  armorPenetration = 0;
  cooldownTicks = 10;

  withMinDamage(minDamage: number): TestWeaponBuilder {
    this.minDamage = minDamage;
    return this;
  }

  withMaxDamage(maxDamage: number): TestWeaponBuilder {
    this.maxDamage = maxDamage;
    return this;
  }

  withAccuracy(accuracy: number): TestWeaponBuilder {
    this.accuracy = accuracy;
    return this;
  }

  withTracking(tracking: number): TestWeaponBuilder {
    this.tracking = tracking;
    return this;
  }

  withShieldDamageMultiplier(shieldDamageMultiplier: number): TestWeaponBuilder {
    this.shieldDamageMultiplier = shieldDamageMultiplier;
    return this;
  }

  withArmorDamageMultiplier(armorDamageMultiplier: number): TestWeaponBuilder {
    this.armorDamageMultiplier = armorDamageMultiplier;
    return this;
  }

  withHullDamageMultiplier(hullDamageMultiplier: number): TestWeaponBuilder {
    this.hullDamageMultiplier = hullDamageMultiplier;
    return this;
  }

  withShieldPenetration(shieldPenetration: number): TestWeaponBuilder {
    this.shieldPenetration = shieldPenetration;
    return this;
  }

  withArmorPenetration(armorPenetration: number): TestWeaponBuilder {
    this.armorPenetration = armorPenetration;
    return this;
  }

  withCooldown(cooldownTicks: number): TestWeaponBuilder {
    this.cooldownTicks = cooldownTicks;
    return this;
  }

  build(): Weapon {
    return new Weapon(
      this.name,
      Tech.Laser,
      Tier.I,
      this.size,
      this.minDamage,
      this.maxDamage,
      this.shieldDamageMultiplier,
      this.armorDamageMultiplier,
      this.hullDamageMultiplier,
      this.shieldPenetration,
      this.armorPenetration,
      this.accuracy,
      this.tracking,
      this.cooldownTicks
    );
  }
}

export function testWeapon(): TestWeaponBuilder {
  return new TestWeaponBuilder();
}
