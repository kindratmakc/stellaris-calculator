<template>
  <tr class="text-center">
    <td>{{ size }}</td>
    <td>{{ weapon.getAverageDamagePerHit() }}</td>
    <td>{{ weapon.cooldownTicks / 10 }}d</td>
    <td>{{ weapon.tracking }}%</td>
    <td>{{ timeToKillWithBonusesDays }}<sup class="text-success">{{ timeToKillWithBonusesDiffDays }}</sup></td>
    <td>{{ sizeAdjustedTimeToKillDays }}</td>
  </tr>
</template>

<script>
import {Weapon, TICKS_PER_DAY, Size} from '@/domain/weapon';
import useStore from '@/store';

export default {
  name: 'WeaponRow',
  setup() {
    return {
      store: useStore(),
    };
  },
  props: {
    weapon: {
      type: Weapon,
      required: true
    },
  },
  computed: {
    timeToKill() {
      return this.weapon.getDamageReport(this.store.target).timeToKillTicks;
    },
    timeToKillWithBonusesDays() {
      let ttk = this.timeToKillWithBonuses;

      if (ttk === Infinity) {
        return '∞';
      }

      return `${Math.floor(ttk) / TICKS_PER_DAY}d`;
    },
    sizeAdjustedTimeToKillDays() {
      let ttk = this.timeToKillWithBonuses;

      if (ttk === Infinity) {
        return '∞';
      }

      return `${Math.floor(ttk * this.weaponSizeMultiplier) / TICKS_PER_DAY}d`;
    },
    weaponSizeMultiplier() {
      switch (this.weapon.size) {
        case Size.Small:
          return 1;
        case Size.Medium:
          return 2;
        case Size.Large:
          return 4;
        case Size.ExtraLarge:
          return 8;
        default:
          return 1;
      }
    },
    timeToKillWithBonusesDiffDays() {
      let ttk = this.timeToKillWithBonusesDiff;

      if (ttk === Infinity || ttk === -Infinity || ttk === 0) {
        return '';
      }

      return `${Math.floor(ttk) / TICKS_PER_DAY}d`;
    },
    timeToKillWithBonusesDiff() {
      const ttkWithBonuses = this.timeToKillWithBonuses;

      if (ttkWithBonuses === Infinity) {
        return Infinity;
      }

      return ttkWithBonuses - this.timeToKill;
    },
    timeToKillWithBonuses() {
      return this.weapon.getDamageReport(this.store.target, this.store.attacker.trackingBonus, this.store.attacker.accuracyBonus).timeToKillTicks;
    },
    size() {
      return this.weapon.size.toString();
    },
  },
};
</script>


<style scoped>
</style>
