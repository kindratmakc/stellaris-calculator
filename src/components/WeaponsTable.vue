<template>
  <table class="table table-hover align-middle">
    <thead class="table-light sticky-top">
    <tr>
      <th class="col-2">Weapon</th>
      <th>Size</th>
      <th>Damage</th>
      <th>Cooldown</th>
      <th>Tracking</th>
      <th>Time to Kill</th>
      <th>Size Adjusted TTK</th>
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
