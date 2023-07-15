<script lang="ts">
	import WeaponTierGroup from './WeaponTierGroup.svelte';
	import type { Tech, Weapon } from '$lib/weapon';
	import { groupByTier } from '../data/weapons-list';

	export let tech: Tech;
	export let weapons: Weapon[];

	let groupedByTier = groupByTier(weapons);
</script>

<tbody>
	<tr class="table-light">
		<th colspan="100">
			<span
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-custom-class="custom-tooltip"
				data-bs-html="true"
				data-bs-title="Accuracy: {weapons[0].accuracy}%<br>
                         Hull DMG: {weapons[0].hullDamage * 100}%<br>
                         Armor DMG: {weapons[0].armorDamage * 100}%<br>
                         Shield DMG: {weapons[0].shieldDamage * 100}%<br>
                         Armor Pen: {weapons[0].armorPenetration * 100}%<br>
                         Shield Pen: {weapons[0].shieldPenetration * 100}%"
			>
				{tech} <i class="fa-regular fa-circle-question fa-sm" />
			</span>
		</th>
	</tr>
</tbody>
{#each groupedByTier as [tier, weapons]}
	<WeaponTierGroup {tech} {tier} {weapons} />
{/each}
