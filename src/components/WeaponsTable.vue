<template>
  <table class="table table-hover align-middle">
    <thead class="table-light sticky-top">
    <tr>
      <th class="col-2">Weapon</th>
      <th>Size</th>
      <th>Damage</th>
      <th>DPS</th>
      <th>Cooldown</th>
      <th>Accuracy</th>
      <th>Tracking</th>
      <th>Hull DMG</th>
      <th>Armor DMG</th>
      <th>Shield DMG</th>
      <th>Armor Pen</th>
      <th>Shield Pen</th>
      <th>Time to Kill</th>
    </tr>
    </thead>
    <WeaponTechGroup
      v-for="[tech, weapons] in weaponsByTech"
      :key="tech"
      :tech="tech"
      :weapons="weapons"
    />
  </table>
</template>

<script>
import {weapons, groupByTech} from '@/data/weapons-list';
import WeaponTechGroup from "@/components/WeaponTechGroup.vue";

export default {
  name: 'WeaponsTable',
  components: {
    WeaponTechGroup
  },
  data() {
    return {
      weaponsByTech: groupByTech(weapons),
    };
  },
};
</script>

<style scoped>
</style>
