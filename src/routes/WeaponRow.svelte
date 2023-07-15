<script lang="ts">
	import { Size, TICKS_PER_DAY, type Weapon } from '$lib/weapon';
	import { attacker, target } from './stores';

	export let weapon: Weapon;

	function calculateTimeToKillWithBonusesDiff(ttk: number, ttkWithBonus: number) {
		if (ttkWithBonus === Infinity) {
			return Infinity;
		}

		return ttkWithBonus - ttk;
	}
	function ticksToDays(ticks: number) {
		if (ticks === Infinity) {
			return '∞';
		}

		return `${Math.floor(ticks) / TICKS_PER_DAY}d`;
	}
	function getWeaponSizeMultiplier(weapon: Weapon) {
		switch (weapon.size) {
			case Size.Small:
				return 1;
			case Size.Medium:
				return 2;
			case Size.Large:
				return 4;
			case Size.ExtraLarge:
				return 8;
			default:
				return 1;
		}
	}

	$: ttkTicks = weapon.getDamageReport($target).timeToKillTicks;
	$: ttkTicksWithBonus = weapon.getDamageReport(
		$target,
		$attacker.trackingBonus,
		$attacker.accuracyBonus
	).timeToKillTicks;
	$: timeToKillTicksWithBonusDiff = calculateTimeToKillWithBonusesDiff(ttkTicks, ttkTicksWithBonus);
	$: timeToDisengageTicks = weapon.getTimeToDisengage(
		$target,
		$attacker.trackingBonus,
		$attacker.accuracyBonus
	);
	$: sizeAdjustedTimeToKillTicks = ttkTicksWithBonus * getWeaponSizeMultiplier(weapon);
</script>

<tr class="text-center">
	<td>{weapon.size.toString()}</td>
	<td>{weapon.getAverageDamagePerHit()}</td>
	<td>{ticksToDays(weapon.cooldownTicks)}</td>
	<td>{weapon.tracking}%</td>
	<td>
		{ticksToDays(ttkTicksWithBonus)}
		<sup class="text-success">{ticksToDays(timeToKillTicksWithBonusDiff)}</sup>
	</td>
	<td>{ticksToDays(sizeAdjustedTimeToKillTicks)}</td>
	<td>{ticksToDays(timeToDisengageTicks)}</td>
</tr>
