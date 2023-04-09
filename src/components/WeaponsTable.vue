<template>
  <table class="table align-middle">
    <thead class="table-light sticky-top">
    <tr>
      <th class="col-1">Weapon</th>
      <th class="col-1 text-center">Size</th>
      <th class="col-1 text-center">Damage</th>
      <th class="col-1 text-center">Cooldown</th>
      <th class="col-1 text-center">Tracking</th>
      <th class="col-1 text-center">
        <span data-bs-toggle="tooltip" data-bs-placement="bottom"
              data-bs-title="Time in days required to kill target">
          TTK<i class="fa-regular fa-circle-question fa-sm"></i>
        </span>
      </th>
      <th class="col-1 text-center">
        <span data-bs-toggle="tooltip" data-bs-placement="bottom"
              data-bs-title="Helps to choose right weapon size. Formula: ttk*weaponSizeMultiplier">
          Size Adjusted TTK<i class="fa-regular fa-circle-question fa-sm"></i>
        </span>
      </th>
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
