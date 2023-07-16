<script lang="ts">
  import { weapons, groupByTech } from "../data/weapons-list";
  import WeaponTechGroup from "./WeaponTechGroup.svelte";
  import WeaponsTableHeader from "./WeaponsTableHeader.svelte";

  const weaponsByTech = groupByTech(weapons);
</script>

<table class="table align-middle">
  <WeaponsTableHeader />
  {#each weaponsByTech as [tech, weapons]}
    <WeaponTechGroup tech="{tech}" weapons="{weapons}" />
  {/each}
</table>
