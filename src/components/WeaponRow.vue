<template>
  <tr>
    <td>{{ size }}</td>
    <td>{{ weapon.getAverageDamagePerHit() }}</td>
    <td>{{ parseFloat(weapon.getAverageDamagePerDay().toFixed(2)) }}</td>
    <td>{{ weapon.cooldownTicks / 10 }}</td>
    <td>{{ weapon.accuracy }}%</td>
    <td>{{ weapon.tracking }}%</td>
    <td>{{ weapon.hullDamage * 100 }}%</td>
    <td>{{ weapon.armorDamage * 100 }}%</td>
    <td>{{ weapon.shieldDamage * 100 }}%</td>
    <td>{{ weapon.armorPenetration }}</td>
    <td>{{ weapon.shieldPenetration }}</td>
    <td>{{ timeToKill }}</td>
  </tr>
</template>

<script>
import {Weapon, TICKS_PER_DAY} from '@/domain/weapon';
import useStore from '@/store';

export default {
  name: 'WeaponRow',
  setup() {
    return {
      store: useStore(),
    };
  },
  props: {
    weapon: Weapon,
  },
  computed: {
    timeToKill() {
      let ttk = this.weapon
        .getDamageReport(this.store.target, this.store.attacker.trackingBonus, this.store.attacker.accuracyBonus)
        .timeToKillTicks;

      if (ttk === Infinity) {
        return '∞';
      }

      return `${Math.floor(ttk) / TICKS_PER_DAY}d`;
    },
    size() {
      return this.weapon.size.toString();
    },
  },
};
</script>


<style scoped>
</style>
