<template>
  <tr>
    <td>{{ size }}</td>
    <td>{{ weapon.getAverageDamagePerHit() }}</td>
    <td>{{ weapon.cooldownTicks / 10 }}d</td>
    <td>{{ weapon.tracking }}%</td>
    <td>{{ timeToKillWithBonusesDays }}<sup class="text-success">{{ timeToKillWithBonusesDiffDays }}</sup></td>
    <td>{{ sizeAdjustedTimeToKillDays }}d</td>
  </tr>
</template>

<script lang="ts">
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
    timeToKill(): number {
      return this.weapon.getDamageReport(this.store.target).timeToKillTicks;
    },
    timeToKillWithBonusesDays(): string {
      let ttk = this.timeToKillWithBonuses;

      if (ttk === Infinity) {
        return '∞';
      }

      return `${Math.floor(ttk) / TICKS_PER_DAY}d`;
    },
    sizeAdjustedTimeToKillDays(): string {
      let ttk = this.timeToKillWithBonuses;

      if (ttk === Infinity) {
        return '∞';
      }

      return `${Math.floor(ttk * this.weaponSizeMultiplier) / TICKS_PER_DAY}d`;
    },
    weaponSizeMultiplier(): number {
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
    timeToKillWithBonusesDiffDays(): string {
      let ttk = this.timeToKillWithBonusesDiff;

      if (ttk === Infinity || ttk === -Infinity || ttk === 0) {
        return '';
      }

      return `${Math.floor(ttk) / TICKS_PER_DAY}d`;
    },
    timeToKillWithBonusesDiff(): number {
      const ttkWithBonuses = this.timeToKillWithBonuses;

      if (ttkWithBonuses === Infinity) {
        return Infinity;
      }

      return ttkWithBonuses - this.timeToKill;
    },
    timeToKillWithBonuses(): number {
      return this.weapon.getDamageReport(this.store.target, this.store.attacker.trackingBonus, this.store.attacker.accuracyBonus).timeToKillTicks;
    },
    size(): string {
      return this.weapon.size.toString();
    },
  },
};
</script>


<style scoped>
</style>
