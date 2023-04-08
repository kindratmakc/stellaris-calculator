import {Size, Tech, Tier, Weapon} from "@/domain/weapon";

export const weapons = [
  // Lasers
  new Weapon('Red Laser', Tech.Laser, Tier.I, Size.Small, 6.00, 16.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 50, 42.5),
  new Weapon('Red Laser', Tech.Laser, Tier.I, Size.Medium, 15.00, 40.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 30, 50),
  new Weapon('Red Laser', Tech.Laser, Tier.I, Size.Large, 36.00, 96.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 5, 57),
  new Weapon('Blue Laser', Tech.Laser, Tier.II, Size.Small, 8.00, 21.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 50, 42.5),
  new Weapon('Blue Laser', Tech.Laser, Tier.II, Size.Medium, 20.00, 53.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 30, 50),
  new Weapon('Blue Laser', Tech.Laser, Tier.II, Size.Large, 48.00, 126.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 5, 57),
  new Weapon('UV Laser', Tech.Laser, Tier.III, Size.Small, 10.00, 27.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 50, 42.5),
  new Weapon('UV Laser', Tech.Laser, Tier.III, Size.Medium, 25.00, 68.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 30, 50),
  new Weapon('UV Laser', Tech.Laser, Tier.III, Size.Large, 60.00, 162.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 5, 57),
  new Weapon('X-Ray Laser', Tech.Laser, Tier.IV, Size.Small, 13.00, 35.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 50, 42.5),
  new Weapon('X-Ray Laser', Tech.Laser, Tier.IV, Size.Medium, 33.00, 88.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 30, 50),
  new Weapon('X-Ray Laser', Tech.Laser, Tier.IV, Size.Large, 78.00, 210.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 5, 57),
  new Weapon('Gamma Laser', Tech.Laser, Tier.V, Size.Small, 17.00, 46.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 50, 42.5),
  new Weapon('Gamma Laser', Tech.Laser, Tier.V, Size.Medium, 43.00, 115.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 30, 50),
  new Weapon('Gamma Laser', Tech.Laser, Tier.V, Size.Large, 102.00, 276.00, 0.50, 1.50, 1.25, 0.00, 0.00, 90, 5, 57),
  // Mass Drivers
  new Weapon('Mass Driver', Tech.MassDriver, Tier.I, Size.Small, 5.00, 16.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 50, 29),
  new Weapon('Mass Driver', Tech.MassDriver, Tier.I, Size.Medium, 13.00, 40.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 30, 36),
  new Weapon('Mass Driver', Tech.MassDriver, Tier.I, Size.Large, 30.00, 96.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 5, 42.5),
  new Weapon('Coilgun', Tech.MassDriver, Tier.II, Size.Small, 7.00, 21.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 50, 29),
  new Weapon('Coilgun', Tech.MassDriver, Tier.II, Size.Medium, 18.00, 53.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 30, 36),
  new Weapon('Coilgun', Tech.MassDriver, Tier.II, Size.Large, 42.00, 126.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 5, 42.5),
  new Weapon('Railgun', Tech.MassDriver, Tier.III, Size.Small, 9.00, 27.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 50, 29),
  new Weapon('Railgun', Tech.MassDriver, Tier.III, Size.Medium, 23.00, 68.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 30, 36),
  new Weapon('Railgun', Tech.MassDriver, Tier.III, Size.Large, 54.00, 162.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 5, 42.5),
  new Weapon('Advanced Railgun', Tech.MassDriver, Tier.IV, Size.Small, 12.00, 35.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 50, 29),
  new Weapon('Advanced Railgun', Tech.MassDriver, Tier.IV, Size.Medium, 30.00, 88.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 30, 36),
  new Weapon('Advanced Railgun', Tech.MassDriver, Tier.IV, Size.Large, 72.00, 210.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 5, 42.5),
  new Weapon('Gauss Cannon', Tech.MassDriver, Tier.V, Size.Small, 16.00, 46.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 50, 29),
  new Weapon('Gauss Cannon', Tech.MassDriver, Tier.V, Size.Medium, 40.00, 115.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 30, 36),
  new Weapon('Gauss Cannon', Tech.MassDriver, Tier.V, Size.Large, 96.00, 276.00, 1.50, 0.50, 1.00, 0.00, 0.00, 75, 5, 42.5),
  // Plasma
  new Weapon('Plasma Thrower', Tech.PlasmaLauncher, Tier.I, Size.Small, 12.00, 33.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 40, 50),
  new Weapon('Plasma Thrower', Tech.PlasmaLauncher, Tier.I, Size.Medium, 30.00, 83.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 20, 57),
  new Weapon('Plasma Thrower', Tech.PlasmaLauncher, Tier.I, Size.Large, 72.00, 198.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 5, 64),
  new Weapon('Plasma Accelerator', Tech.PlasmaLauncher, Tier.II, Size.Small, 16.00, 43.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 40, 50),
  new Weapon('Plasma Accelerator', Tech.PlasmaLauncher, Tier.II, Size.Medium, 40.00, 108.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 20, 57),
  new Weapon('Plasma Accelerator', Tech.PlasmaLauncher, Tier.II, Size.Large, 96.00, 258.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 5, 64),
  new Weapon('Plasma Cannon', Tech.PlasmaLauncher, Tier.III, Size.Small, 21.00, 56.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 40, 50),
  new Weapon('Plasma Cannon', Tech.PlasmaLauncher, Tier.III, Size.Medium, 53.00, 140.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 20, 57),
  new Weapon('Plasma Cannon', Tech.PlasmaLauncher, Tier.III, Size.Large, 126.00, 336.00, 0.25, 2.00, 1.50, 0.00, 0.00, 80, 5, 64),
  // Disruptors
  new Weapon('Disruptor', Tech.Disruptor, Tier.I, Size.Small, 1.00, 11.20, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 60, 23),
  new Weapon('Disruptor', Tech.Disruptor, Tier.I, Size.Medium, 1.00, 28.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 35, 34),
  new Weapon('Ion Disruptor', Tech.Disruptor, Tier.II, Size.Small, 1.00, 14.70, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 60, 23),
  new Weapon('Ion Disruptor', Tech.Disruptor, Tier.II, Size.Medium, 1.00, 37.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 35, 34),
  new Weapon('Phased Disruptor', Tech.Disruptor, Tier.III, Size.Small, 1.00, 19.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 60, 23),
  new Weapon('Phased Disruptor', Tech.Disruptor, Tier.III, Size.Medium, 1.00, 48.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 35, 34),
  // Autocannons
  new Weapon('Autocannon', Tech.Autocannon, Tier.I, Size.Small, 8.00, 16.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 75, 8.5),
  new Weapon('Autocannon', Tech.Autocannon, Tier.I, Size.Medium, 20.00, 40.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 50, 13),
  new Weapon('Autocannon', Tech.Autocannon, Tier.I, Size.Large, 48.00, 96.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 25, 17),
  new Weapon('Ripper Autocannon', Tech.Autocannon, Tier.II, Size.Small, 10.00, 21.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 75, 8.5),
  new Weapon('Ripper Autocannon', Tech.Autocannon, Tier.II, Size.Medium, 25.00, 53.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 50, 13),
  new Weapon('Ripper Autocannon', Tech.Autocannon, Tier.II, Size.Large, 60.00, 126.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 25, 17),
  new Weapon('Stormfire Autocannon', Tech.Autocannon, Tier.III, Size.Small, 13.00, 27.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 75, 8.5),
  new Weapon('Stormfire Autocannon', Tech.Autocannon, Tier.III, Size.Medium, 33.00, 68.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 50, 13),
  new Weapon('Stormfire Autocannon', Tech.Autocannon, Tier.III, Size.Large, 78.00, 162.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 25, 17),
  new Weapon('Nanite Autocannon', Tech.Autocannon, Tier.IV, Size.Small, 17.00, 35.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 75, 8.5),
  new Weapon('Nanite Autocannon', Tech.Autocannon, Tier.IV, Size.Medium, 43.00, 88.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 50, 13),
  new Weapon('Nanite Autocannon', Tech.Autocannon, Tier.IV, Size.Large, 102.00, 210.00, 1.50, 0.25, 1.25, 0.00, 0.00, 85, 25, 17),
  // Kinetic Artillery
  new Weapon('Kinetic Battery', Tech.KineticLauncher, Tier.I, Size.Large, 150.00, 450.00, 2.00, 0.50, 1.00, 0.00, 0.00, 75, 0, 71.5),
  new Weapon('Kinetic Artillery', Tech.KineticLauncher, Tier.II, Size.Large, 195.00, 585.00, 2.00, 0.50, 1.00, 0.00, 0.00, 75, 0, 71.5),
  // Energy Launcher
  new Weapon('Proton Launchers', Tech.ParticleLauncher, Tier.I, Size.Guided, 47.00, 101.00, 0.50, 1.50, 1.75, 0.00, 0.00, 75, 0, 212.5),
  new Weapon('Neutron Launchers', Tech.ParticleLauncher, Tier.II, Size.Guided, 61.00, 131.00, 0.50, 1.50, 1.75, 0.00, 0.00, 75, 0, 212.5),
  // Mega Cannon
  new Weapon('Mega Cannon', Tech.MegaCannon, Tier.I, Size.ExtraLarge, 700.00, 2000.00, 1.50, 0.75, 1.00, 0.00, 0.00, 75, 0, 114),
  new Weapon('Giga Cannon', Tech.MegaCannon, Tier.II, Size.ExtraLarge, 910.00, 2600.00, 1.50, 0.75, 1.00, 0.00, 0.00, 75, 0, 114),
  // Energy Lance
  new Weapon('Particle Lance', Tech.Lance, Tier.I, Size.ExtraLarge, 600.00, 1500.00, 0.50, 2.00, 1.50, 0.00, 0.00, 85, 0, 99.5),
  new Weapon('Tachyon Lance', Tech.Lance, Tier.II, Size.ExtraLarge, 780.00, 1950.00, 0.50, 2.00, 1.50, 0.00, 0.00, 85, 0, 99.5),
  // Arc Emitter
  new Weapon('Arc Emitter', Tech.ArcEmitter, Tier.I, Size.ExtraLarge, 1.00, 1300.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 0, 101),
  new Weapon('Focused Arc Emitter', Tech.ArcEmitter, Tier.II, Size.ExtraLarge, 2.00, 1690.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 0, 101),
  // Titan Laser
  new Weapon('Perdition Beam', Tech.PerditionBeam, Tier.I, Size.Titan, 5000.00, 10000.00, 0.75, 1.50, 1.25, 0.00, 0.00, 85, 0, 255),
  new Weapon('Ancient Ruination Glare', Tech.AncientRuinationGlare, Tier.I, Size.Titan, 5000.00, 10000.00, 0.50, 1.75, 1.25, 0.00, 0.00, 85, 0, 145),
  // Flak Battery
  // new Weapon('Flak Battery', Tech.FlakGun, Tier.I, Size.PointDefense, 2.00, 4.00, 2.00, 0.25, 1.00, 0.25, 0.00, 75, 50, 5),
  // new Weapon('Flak Cannons', Tech.FlakGun, Tier.II, Size.PointDefense, 3.00, 6.00, 2.00, 0.25, 1.00, 0.25, 0.00, 75, 60, 5),
  // new Weapon('Flak Artillery', Tech.FlakGun, Tier.III, Size.PointDefense, 4.00, 8.00, 2.00, 0.25, 1.00, 0.25, 0.00, 75, 70, 5),
  // new Weapon('Nanite Flak Battery', Tech.FlakGun, Tier.IV, Size.PointDefense, 6.00, 11.00, 2.00, 0.50, 1.00, 0.25, 0.00, 75, 80, 5),
  // Point-Defense
  // new Weapon('Sentinel Point-Defense', Tech.PointDefense, Tier.I, Size.PointDefense, 2.00, 4.00, 0.25, 2.00, 1.00, 0.00, 0.25, 75, 10, 5),
  // new Weapon('Barrier Point-Defense', Tech.PointDefense, Tier.II, Size.PointDefense, 3.00, 6.00, 0.25, 2.00, 1.00, 0.00, 0.25, 75, 20, 5),
  // new Weapon('Guardian Point-Defense', Tech.PointDefense, Tier.III, Size.PointDefense, 4.00, 8.00, 0.25, 2.00, 1.00, 0.00, 0.25, 75, 30, 5),
  // new Weapon('Ancient Defensive Web Slinger', Tech.AncientDefensiveWebSlinger, Tier.I, Size.PointDefense, 5.00, 10.00, 0.25, 2.00, 1.00, 0.00, 0.25, 75, 30, 5),
  // Missiles
  new Weapon('Nuclear Missiles', Tech.Missiles, Tier.I, Size.Small, 16.00, 24.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 25, 85),
  new Weapon('Fusion Missiles', Tech.Missiles, Tier.II, Size.Small, 21.00, 32.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 25, 85),
  new Weapon('Antimatter Missiles', Tech.Missiles, Tier.III, Size.Small, 28.00, 42.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 25, 85),
  new Weapon('Quantum Missiles', Tech.Missiles, Tier.IV, Size.Small, 37.00, 55.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 25, 85),
  new Weapon('Marauder Missiles', Tech.Missiles, Tier.V, Size.Small, 49.00, 72.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 25, 85),
  // Torpedoes
  new Weapon('Space Torpedoes', Tech.Torpedoes, Tier.I, Size.Guided, 100.00, 150.00, 1.00, 1.50, 1.00, 1.00, 0.00, 100, 10, 207.5),
  new Weapon('Armored Torpedoes', Tech.Torpedoes, Tier.II, Size.Guided, 130.00, 195.00, 1.00, 1.50, 1.00, 1.00, 0.00, 100, 10, 207.5),
  new Weapon('Devastator Torpedoes', Tech.Torpedoes, Tier.III, Size.Guided, 169.00, 254.00, 1.00, 1.50, 1.00, 1.00, 0.00, 100, 10, 207.5),
  // Swarmer Missiles
  new Weapon('Swarmer Missiles', Tech.SwarmerMissiles, Tier.I, Size.Medium, 36.00, 50.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 30, 42.5),
  new Weapon('Whirlwind Missiles', Tech.SwarmerMissiles, Tier.II, Size.Medium, 61.00, 85.00, 1.00, 1.00, 1.00, 1.00, 0.00, 100, 30, 42.5),
  // Researchable Space Critters
  new Weapon('Cloud Lightning', Tech.CloudLightning, Tier.I, Size.Large, 1.00, 106.00, 1.00, 1.00, 1.00, 1.00, 1.00, 100, 30, 71.5),
  new Weapon('Cutting Laser', Tech.MiningLaser, Tier.I, Size.Small, 8.00, 21.00, 0.50, 1.50, 1.50, 0.00, 0.00, 75, 40, 23),
  new Weapon('Cutting Laser', Tech.MiningLaser, Tier.I, Size.Medium, 20.00, 53.00, 0.50, 1.50, 1.50, 0.00, 0.00, 70, 20, 34),
  new Weapon('Energy Siphon', Tech.EnergySiphon, Tier.I, Size.Small, 8.00, 21.00, 2.00, 0.25, 1.00, 0.00, 0.00, 75, 50, 42.5),
  // archaeoweapons
  // new Weapon('Ancient Cavitation Collapser', Tech.AncientCavitationCollapser, Tier.I, Size.Small, 11.50, 31.00, 0.50, 1.50, 1.00, 0.00, 0.50, 90, 50, 42.5),
  // new Weapon('Ancient Cavitation Collapser', Tech.AncientCavitationCollapser, Tier.I, Size.Medium, 28.75, 75.00, 0.50, 1.50, 1.00, 0.00, 0.50, 90, 30, 50),
  // new Weapon('Ancient Cavitation Collapser', Tech.AncientCavitationCollapser, Tier.I, Size.Large, 69.00, 186.00, 0.50, 1.50, 1.00, 0.00, 0.50, 90, 5, 57),
  new Weapon('Ancient Macro Batteries', Tech.AncientMacroBatteries, Tier.I, Size.Small, 12.00, 31.00, 1.50, 0.50, 1.00, 0.00, 0.00, 50, 50, 29),
  new Weapon('Ancient Macro Batteries', Tech.AncientMacroBatteries, Tier.I, Size.Medium, 26.50, 78.00, 1.50, 0.50, 1.00, 0.00, 0.00, 50, 30, 36),
  new Weapon('Ancient Macro Batteries', Tech.AncientMacroBatteries, Tier.I, Size.Large, 62.00, 186.00, 1.50, 0.50, 1.00, 0.00, 0.00, 50, 5, 42.5),
  new Weapon('Ancient Nano-Missile Cloud Launcher', Tech.AncientNanoMissileCloudLauncher, Tier.I, Size.Small, 3.00, 5.00, 1.00, 1.00, 1.25, 1.00, 1.00, 100, 25, 8.5),
  new Weapon('Ancient Saturator Artillery', Tech.AncientSaturatorArtillery, Tier.I, Size.ExtraLarge, 920.00, 2600.00, 2.50, 0.25, 1.25, 0.00, 0.00, 75, 0, 114),
];

export function groupByTech(weapons: Weapon[]): Map<Tech, Weapon[]> {
  const map = new Map<Tech, Weapon[]>();

  for (const weapon of weapons) {
    if (!map.has(weapon.tech)) {
      map.set(weapon.tech, []);
    }
    map.get(weapon.tech)?.push(weapon);
  }

  return map;
}

export function groupByTier(weapons: Weapon[]): Map<Tier, Weapon[]> {
  const map = new Map<Tier, Weapon[]>();

  for (const weapon of weapons) {
    if (!map.has(weapon.tier)) {
      map.set(weapon.tier, []);
    }
    map.get(weapon.tier)?.push(weapon);
  }

  return map;
}
