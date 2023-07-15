<script>
	import TargetForm from './TargetForm.svelte';
	import AttackerForm from './AttackerForm.svelte';
	import WeaponsTable from './WeaponsTable.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
			// @ts-ignore
			new bootstrap.Tooltip(tooltip);
		});
	});
</script>

<svelte:head>
	<title>Stellaris combat calculator</title>
</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->

<div class="row">
	<div class="col-2">
		<div class="sticky-top">
			<TargetForm />
			<AttackerForm />
		</div>
	</div>
	<div class="col">
		<WeaponsTable />
	</div>
</div>
