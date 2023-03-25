<!-- src/App.vue -->

<template>
  <div id="app" class="container-fluid">
    <div class="row mb-3 mt-3">
      <div class="col">
        <h1 class="text-center display-4">Stellaris advanced combat calculator</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <TargetForm/>
        <AttackerForm/>
      </div>
      <div class="col">
        <WeaponsTable/>
      </div>
    </div>
  </div>
</template>


<script>
import WeaponsTable from '@/components/WeaponsTable.vue';
import TargetForm from "@/components/TargetForm.vue";
import AttackerForm from "@/components/AttackerForm.vue";

export default {
  name: 'App',
  components: {
    AttackerForm,
    TargetForm,
    WeaponsTable,
  },
};
</script>

