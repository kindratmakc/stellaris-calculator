<script lang="ts">
	import { attacker } from './stores';
</script>

<div>
	<h3>Attacker</h3>
	<div>
		<div class="form-floating shadow-sm mb-3">
			<input
				id="accuracy-bonus-input"
				bind:value={$attacker.accuracyBonus}
				type="number"
				class="form-control"
				placeholder="0"
			/>
			<label for="accuracy-bonus-input">Accuracy bonus</label>
		</div>
		<div class="form-floating shadow-sm mb-3">
			<input
				id="tracking-bonus-input"
				bind:value={$attacker.trackingBonus}
				type="number"
				class="form-control"
				placeholder="0"
			/>
			<label for="tracking-bonus-input">Tracking bonus</label>
		</div>
	</div>
</div>
