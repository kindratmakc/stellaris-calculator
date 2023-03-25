<template>
  <tbody>
  <tr class="table-light">
    <th colspan="100%">
      {{ tech }}
    </th>
  </tr>
  </tbody>
  <WeaponTierGroup
    v-for="[tier, weapons] in groupedByTier"
    :key="tier"
    :tech="tech"
    :tier="tier"
    :weapons="weapons"
  />
</template>

<script>
import {Tech} from "@/domain/weapon";
import WeaponTierGroup from "@/components/WeaponTierGroup.vue";
import {groupByTier} from "@/data/weapons-list";

export default {
  name: "WeaponTechGroup",
  data() {
    return {
      collapsed: false,
    };
  },
  props: {
    tech: Tech,
    weapons: Array,
  },
  components: {
    WeaponTierGroup
  },
  computed: {
    groupedByTier() {
      return groupByTier(this.weapons);
    }
  }
}
</script>

<style scoped>
</style>
