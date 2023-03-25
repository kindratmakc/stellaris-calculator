<template>
  <tbody>
  <tr>
    <td rowspan="100%">
      <img :src="`./images/${tech}${tier}.png`" class="weapon-icon" alt=""/> {{ weaponName }}
    </td>
  </tr>

  <WeaponRow
    v-for="weapon in weapons"
    :key="weapon.name"
    :weapon="weapon"
    :class="{ 'collapsed' : collapsed }"
  />
  </tbody>
</template>

<script>
import {Tech, Tier} from "@/domain/weapon";
import WeaponRow from "@/components/WeaponRow.vue";

export default {
  name: "WeaponTierGroup",
  props: {
    tech: Tech,
    tier: Tier,
    weapons: Array,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    weaponName() {
      return this.weapons[0].name;
    }
  },
  components: {
    WeaponRow
  }
}
</script>

<style scoped>
.weapon-icon {
  width: 32px;
  height: 32px;
}
</style>
