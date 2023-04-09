<!-- src/App.vue -->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Stellaris advanced combat calculator</span>
    <span class="navbar-text">
      <a class="nav-link" href="https://github.com/kindratmakc/stellaris-advanced-calculator" target="_blank">
        GitHub <i class="fa-brands fa-github fa-2xl" style="color: #ebebeb;"></i>
      </a>
    </span>
  </div>
</nav>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="sticky-top">
          <TargetForm/>
          <AttackerForm/>
        </div>
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
import {Tooltip} from "bootstrap";

export default {
  name: 'App',
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  },
  components: {
    AttackerForm,
    TargetForm,
    WeaponsTable,
  },
};
</script>

