<template>
  <div>
    <h3>Attacker</h3>
    <div>
      <div class="form-floating shadow-sm mb-3">
        <input id="accuracy-bonus-input" type="number" class="form-control"
               v-model.number="store.attacker.accuracyBonus"
               placeholder="0"/>
        <label for="accuracy-bonus-input">Accuracy bonus</label>
      </div>
      <div class="form-floating shadow-sm mb-3">
        <input id="tracking-bonus-input" type="number" class="form-control"
               v-model.number="store.attacker.trackingBonus"
               placeholder="0"/>
        <label for="tracking-bonus-input">Tracking bonus</label>
      </div>
    </div>
  </div>
</template>

<script>
import useStore from "@/store";

export default {
  name: 'AttackerForm',
  setup() {
    return {
      store: useStore(),
    };
  },
}
</script>
