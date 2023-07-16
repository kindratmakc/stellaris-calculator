<script lang="ts">
  import { TICKS_PER_DAY, Weapon } from "$lib/weapon";
  import { attacker, target } from "./stores";

  export let weapon: Weapon = new Weapon("default", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

  function calculateTimeToKillWithBonusesDiff(ttk: number, ttkWithBonus: number) {
    if (ttkWithBonus === Infinity) {
      return Infinity;
    }

    return ttkWithBonus - ttk;
  }

  function ticksToDays(ticks: number) {
    if (ticks === Infinity) {
      return "∞";
    }

    return `${Math.floor(ticks) / TICKS_PER_DAY}d`;
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
  $: sizeAdjustedTimeToKillTicks = ttkTicksWithBonus * weapon.getSizeMultiplier();
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
