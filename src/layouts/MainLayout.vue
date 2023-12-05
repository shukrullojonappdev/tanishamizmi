<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn v-if="backButtonVisible" flat round dense icon="arrow_back" />
        <q-toolbar-title class="toobar-title">{{ route.name }}</q-toolbar-title>
        <q-btn v-if="seatchButtonVisible" flat round dense icon="search" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs>
        <q-route-tab to="/" name="mails" icon="message" />
        <q-route-tab to="/explore" name="alarms" icon="explore" />
        <q-route-tab to="/settings" name="movies" icon="settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const seatchButtonVisible = ref(true);
const backButtonVisible = ref(false);

watch(route, () => {
  route.name === "chats"
    ? (seatchButtonVisible.value = true)
    : (seatchButtonVisible.value = false);
  route.name === "chat"
    ? (backButtonVisible.value = true)
    : (backButtonVisible.value = false);
});
</script>

<style scoped lang="scss"></style>
