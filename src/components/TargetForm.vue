<template>
  <div>
    <h2 class="display-6">Target</h2>
    <div>
      <div class="form-floating shadow-sm mb-3">
        <input id="hull-input" type="number" class="form-control" v-model.number="store.target.hull"
               placeholder="200"/>
        <label for="hull-input">Hull</label>
      </div>
      <div class="form-floating shadow-sm mb-3">
        <input id="armor-input" type="number" class="form-control"
               v-model.number="store.target.armor"
               placeholder="100"/>
        <label for="armor-input">Armor</label>
      </div>
      <div class="form-floating shadow-sm mb-3">
        <input id="shields-input" type="number" class="form-control"
               v-model.number="store.target.shields"
               placeholder="100"/>
        <label for="shields-input">Shields</label>
      </div>
      <div class="form-floating shadow-sm mb-3">
        <input id="evasion-input" type="number" class="form-control"
               v-model.number="store.target.evasion"
               placeholder="60"/>
        <label for="evasion-input">Evasion</label>
      </div>
    </div>
  </div>
</template>
<script>
import useStore from "@/store";

export default {
  name: 'TargetForm',
  setup() {
    return {
      store: useStore(),
    };
  },
}
</script>
