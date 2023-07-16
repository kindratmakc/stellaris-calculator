<script>
  import TargetForm from "./TargetForm.svelte";
  import AttackerForm from "./AttackerForm.svelte";
  import WeaponsTable from "./WeaponsTable.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    document.querySelectorAll("[data-bs-toggle=\"tooltip\"]").forEach((tooltip) => {
      // @ts-ignore
      new bootstrap.Tooltip(tooltip);
    });
  });
</script>

<svelte:head>
  <title>Stellaris combat calculator</title>
</svelte:head>


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
