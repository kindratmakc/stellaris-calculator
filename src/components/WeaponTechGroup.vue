<template>
  <tbody>
  <tr class="table-light">
    <th colspan="100%">
      <span data-bs-toggle="tooltip" data-bs-placement="right"
      data-bs-custom-class="custom-tooltip"
      data-bs-html="true"
      :data-bs-title="`Accuracy: ${weapon.accuracy}%<br>
                       Hull DMG: ${weapon.hullDamage * 100}%<br>
                       Armor DMG: ${weapon.armorDamage * 100}%<br>
                       Shield DMG: ${weapon.shieldDamage * 100}%<br>
                       Armor Pen: ${weapon.armorPenetration * 100}%<br>
                       Shield Pen: ${weapon.shieldPenetration * 100}%`">
        {{ tech }} <i class="fa-regular fa-circle-question fa-sm"></i>
      </span>
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
    },
    weapon() {
      return this.weapons[0];
    },
  }
}
</script>

<style scoped>
</style>
