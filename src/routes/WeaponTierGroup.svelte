<script lang="ts">
  import type { Tech, Tier, Weapon } from "$lib/weapon";
  import WeaponRow from "./WeaponRow.svelte";

  export let tech: Tech;
  export let tier: Tier;
  export let weapons: Weapon[];
</script>

<tbody>
<tr>
  <td rowspan="100">
    <img src="images/{tech}{tier}.png" class="weapon-icon" alt="" />
    {weapons[0].name}
  </td>
</tr>

{#each weapons as weapon}
  <WeaponRow {weapon} />
{/each}
</tbody>

<style>
    .weapon-icon {
        width: 32px;
        height: 32px;
    }
</style>
