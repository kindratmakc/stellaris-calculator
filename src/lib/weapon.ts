import { Target } from '$lib/target';

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
		public readonly cooldownTicks: number
	) {}

	public getAverageDamagePerHit(): number {
		return (this.minDamage + this.maxDamage) / 2;
	}

	public getAverageDamagePerDay(): number {
		return this.getAverageDamagePerHit() / (this.cooldownTicks / TICKS_PER_DAY);
	}

	public getTimeToDisengage(target: Target, trackingBonus: number, accuracyBonus: number): number {
		const halfHullTarget = new Target(
			target.hull / 2,
			target.armor,
			target.shields,
			target.evasion
		);
		const damageReport = this.getDamageReport(halfHullTarget, trackingBonus, accuracyBonus);

		return damageReport.timeToKillTicks;
	}

	public getDamageReport(target: Target, trackingBonus = 0, accuracyBonus = 0): DamageReport {
		const shotsToDepleteShields = this.depleteShields(target);
		const shotsToDepleteArmor = this.depleteArmor(target);
		const shotsToDepleteHull = this.depleteHull(target);

		const totalShots = shotsToDepleteShields + shotsToDepleteArmor + shotsToDepleteHull;

		const hitChance = this.getHitChance(target, trackingBonus, accuracyBonus);
		const timeToKillTicks =
			(Math.ceil(totalShots) * this.cooldownTicks) / hitChance - this.cooldownTicks;

		return new DamageReport(
			timeToKillTicks,
			shotsToDepleteShields,
			shotsToDepleteArmor,
			shotsToDepleteHull
		);
	}

	private depleteShields(target: Target): number {
		if (this.shieldPenetration == 1) {
			return 0;
		}

		return this.shotsToDepleteLayer(target.shields, this.shieldDamage);
	}

	private depleteArmor(target: Target): number {
		if (this.armorPenetration == 1) {
			return 0;
		}

		return this.shotsToDepleteLayer(target.armor, this.armorDamage);
	}

	private depleteHull(target: Target): number {
		return this.shotsToDepleteLayer(target.hull, this.hullDamage);
	}

	private shotsToDepleteLayer(layerHitPoints: number, damageMultiplier: number): number {
		const damagePerHit = this.getAverageDamagePerHit();
		const damageToLayerPerHit = damagePerHit * damageMultiplier;

		return layerHitPoints / damageToLayerPerHit;
	}

	private getHitChance(target: Target, trackingBonus: number, accuracyBonus: number) {
		return (
			Math.max(
				0,
				this.getAccuracy(accuracyBonus) -
					Math.max(0, target.evasion - (this.tracking + trackingBonus))
			) / 100
		);
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
		public readonly shotsToDepleteHull: number
	) {}
}

export enum Size {
	Small = 'S',
	Medium = 'M',
	Large = 'L',
	ExtraLarge = 'XL',
	Titan = 'T',
	Guided = 'G',
	PointDefense = 'P'
}

export enum Tech {
	Amoeba = 'Amoeba',
	AncientCavitationCollapser = 'Ancient Cavitation Collapser',
	AncientDefensiveWebSlinger = 'Ancient Defensive Web Slinger',
	AncientDrillerDrones = 'Ancient Driller Drones',
	AncientMacroBatteries = 'Ancient Macro Batteries',
	AncientNanoMissileCloudLauncher = 'Ancient Nano-Missile Cloud Launcher',
	AncientRuinationGlare = 'Ancient Ruination Glare',
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
	Torpedoes = 'Torpedoes'
}

export enum Tier {
	I = 'I',
	II = 'II',
	III = 'III',
	IV = 'IV',
	V = 'V'
}
