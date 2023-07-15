<script lang="ts">
	import { weapons, groupByTech } from '../data/weapons-list';
	import WeaponTechGroup from './WeaponTechGroup.svelte';

  const weaponsByTech = groupByTech(weapons)
</script>

<table class="table align-middle">
	<thead class="table-light sticky-top">
		<tr>
			<th class="col-2">Weapon</th>
			<th class="col-1 text-center">Size</th>
			<th class="col-1 text-center">Damage</th>
			<th class="col-1 text-center">Cooldown</th>
			<th class="col-1 text-center">Tracking</th>
			<th class="col-2 text-center">
				<span
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Time in days required to kill target"
				>
					TTK<i class="fa-regular fa-circle-question fa-sm" />
				</span>
			</th>
			<th class="col-2 text-center">
				<span
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Helps to choose right weapon size. Formula: ttk*weaponSizeMultiplier"
				>
					Size Adjusted TTK<i class="fa-regular fa-circle-question fa-sm" />
				</span>
			</th>
			<th class="col-2 text-center">
				<span
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Time required to reduce target HP to 50%"
				>
					Time to disengage<i class="fa-regular fa-circle-question fa-sm" />
				</span>
			</th>
		</tr>
	</thead>
	{#each weaponsByTech as [tech, weapons]}
		<WeaponTechGroup tech="{tech}" weapons="{weapons}" />
	{/each}
</table>
