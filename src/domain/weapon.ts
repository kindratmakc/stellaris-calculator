import type {Target} from "@/domain/target";

export const TICKS_PER_DAY = 10;

export class Weapon {
  constructor(
    public readonly name: string,
    public readonly tech: Tech,
    public readonly tier: Tier,
    public readonly size: Size,
    public readonly minDamage: number,
    public readonly maxDamage: number,
    public readonly shieldDamage: number,
    public readonly armorDamage: number,
    public readonly hullDamage: number,
    public readonly shieldPenetration: number,
    public readonly armorPenetration: number,
    public readonly accuracy: number,
    public readonly tracking: number,
    public readonly cooldownTicks: number,
  ) {
  }

  public getAverageDamagePerHit(): number {
    return (this.minDamage + this.maxDamage) / 2;
  }

  public getAverageDamagePerDay(): number {
    return this.getAverageDamagePerHit() / (this.cooldownTicks / TICKS_PER_DAY);
  }

  public getDamageReport(target: Target, trackingBonus= 0, accuracyBonus = 0): DamageReport {
    const shieldsDepletion = this.depleteShields(target);
    const armorDepletion = this.depleteArmor(target, shieldsDepletion);
    const shotsToDepleteHull = this.depleteHull(target, armorDepletion);

    const totalShots = shieldsDepletion.shotsToDepleteLayer + armorDepletion.shotsToDepleteLayer + shotsToDepleteHull;

    const hitChance = this.getHitChance(target, trackingBonus, accuracyBonus);
    const timeToKillTicks = Math.ceil(totalShots) * this.cooldownTicks / hitChance - this.cooldownTicks;

    return new DamageReport(
      timeToKillTicks,
      shieldsDepletion.shotsToDepleteLayer,
      armorDepletion.shotsToDepleteLayer,
      shotsToDepleteHull,
    );
  }

  private depleteShields(target: Target): LayerDepletion {
    if (this.shieldPenetration == 1) {
      return new LayerDepletion(0, 0);
    }

    const shotsToDepleteShields = this.shotsToDepleteLayer(target.shields, 0, this.shieldDamage);
    const shotRemainder = this.getFractionOfShotTransferredToNextLayer(shotsToDepleteShields);

    return new LayerDepletion(shotsToDepleteShields, shotRemainder);
  }

  private depleteArmor(target: Target, shieldDepletion: LayerDepletion): LayerDepletion {
    if (this.armorPenetration == 1) {
      return new LayerDepletion(0, 0);
    }

    const shotsToDepleteArmor = this.shotsToDepleteLayer(target.armor, shieldDepletion.shotRemainder, this.armorDamage);
    const shotRemainder = this.getFractionOfShotTransferredToNextLayer(shotsToDepleteArmor);

    return new LayerDepletion(shotsToDepleteArmor + shieldDepletion.shotRemainder, shotRemainder);
  }

  private depleteHull(target: Target, armorDepletion: LayerDepletion): number {
    return this.shotsToDepleteLayer(target.hull, armorDepletion.shotRemainder, this.hullDamage) + armorDepletion.shotRemainder;
  }

  private getFractionOfShotTransferredToNextLayer(shotsToDepleteLayer: number) {
    const fractionOfLastShotThatHitsCurrentLayer = shotsToDepleteLayer % 1;

    return false
      ? 1 - fractionOfLastShotThatHitsCurrentLayer
      : 0;
  }

  private shotsToDepleteLayer(layerHitPoints: number, previousLayerShotRemainder: number, damageMultiplier: number): number {
    const damagePerHit = this.getAverageDamagePerHit();
    const hitPointsRemainingAfterPreviousLayerRemainderApplied = layerHitPoints - (damagePerHit * previousLayerShotRemainder) * damageMultiplier;
    const damageToLayerPerHit = damagePerHit * damageMultiplier;

    return hitPointsRemainingAfterPreviousLayerRemainderApplied / damageToLayerPerHit;
  }

  private getHitChance(target: Target, trackingBonus: number, accuracyBonus: number) {
    return Math.max(0, this.getAccuracy(accuracyBonus) - Math.max(0, target.evasion - (this.tracking + trackingBonus))) / 100;
  }

  private getAccuracy(accuracyBonus: number) {
    return Math.min(this.accuracy + accuracyBonus, 100);
  }
}

export class DamageReport {
  constructor(
    public readonly timeToKillTicks: number,
    public readonly shotsToDepleteShield: number,
    public readonly shotsToDepleteArmor: number,
    public readonly shotsToDepleteHull: number,
  ) {
  }
}

class LayerDepletion {
  constructor(
    public readonly shotsToDepleteLayer: number,
    public readonly shotRemainder: number,
  ) {
  }
}

export enum Size {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
  ExtraLarge = 'XL',
  Titan = 'T',
  Guided = 'G',
  PointDefense = 'P',
}

export enum Tech {
  Amoeba = 'Amoeba',
  AncientCavitationCollapser = 'Ancient Cavitation Collapser',
  AncientDrillerDrones = 'Ancient Driller Drones',
  AncientMacroBatteries = 'Ancient Macro Batteries',
  AncientNanoMissileCloudLauncher = 'Ancient Nano-Missile Cloud Launcher',
  AncientSaturatorArtillery = 'Ancient Saturator Artillery',
  ArcEmitter = 'Arc Emitter',
  Autocannon = 'Autocannon',
  CloudLightning = 'Cloud Lightning',
  Disruptor = 'Disruptor',
  EnergySiphon = 'Energy Siphon',
  FlakGun = 'Flak Gun',
  KineticLauncher = 'Kinetic Launcher',
  Lance = 'Lance',
  Laser = 'Laser',
  MassDriver = 'Mass Driver',
  MatterDisintegrator = 'Matter Disintegrator',
  MegaCannon = 'Mega Cannon',
  MiningLaser = 'Mining Laser',
  Missiles = 'Missiles',
  NullVoidBeam = 'Null Void Beam',
  ParticleLauncher = 'Particle Launcher',
  PerditionBeam = 'Perdition Beam',
  PlasmaLauncher = 'Plasma Launcher',
  PointDefense = 'Point-Defense',
  RegularStrikeCraft = 'Regular Strike Craft',
  ScourgeMissiles = 'Scourge Missiles',
  SwarmerMissiles = 'Swarmer Missiles',
  SwarmStrikers = 'Swarm Strikers',
  Torpedoes = 'Torpedoes',
}

export enum Tier {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV',
  V = 'V',
}
