<template>
  <tbody>
  <tr class="table-light">
    <th>
      {{ tech }}
    </th>
    <td colspan="100%">Accuracy: {{ weapon.accuracy }}%,
    Hull DMG: {{ weapon.hullDamage * 100 }}%,
    Armor DMG: {{ weapon.armorDamage * 100 }}%,
    Shield DMG: {{ weapon.shieldDamage * 100 }}%,
    Armor Pen: {{ weapon.armorPenetration * 100}}%,
    Shield Pen: {{ weapon.shieldPenetration * 100 }}%</td>
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
