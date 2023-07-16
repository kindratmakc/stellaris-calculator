<script lang="ts">
  import { target } from "./stores";
</script>

<div class="px-1">
  <h3>Target</h3>
  <div>
    <div class="form-floating shadow-sm mb-3">
      <input
        id="hull-input"
        bind:value={$target.hull}
        type="number"
        class="form-control"
        placeholder="200"
      />
      <label for="hull-input">Hull</label>
    </div>
    <div class="form-floating shadow-sm mb-3">
      <input
        id="armor-input"
        bind:value={$target.armor}
        type="number"
        class="form-control"
        placeholder="100"
      />
      <label for="armor-input">Armor</label>
    </div>
    <div class="form-floating shadow-sm mb-3">
      <input
        id="shields-input"
        bind:value={$target.shields}
        type="number"
        class="form-control"
        placeholder="100"
      />
      <label for="shields-input">Shields</label>
    </div>
    <div class="form-floating shadow-sm mb-3">
      <input
        id="evasion-input"
        bind:value={$target.evasion}
        type="number"
        class="form-control"
        placeholder="60"
      />
      <label for="evasion-input">Evasion</label>
    </div>
  </div>
</div>
