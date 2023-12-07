<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          v-if="backButtonVisible"
          flat
          round
          dense
          icon="arrow_back"
          @click="goBack()"
        />
        <q-toolbar-title class="toobar-title">{{ route.name }}</q-toolbar-title>
        <q-btn v-if="searchButtonVisible" flat round dense icon="search" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer :model-value="footerVisible">
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
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const searchButtonVisible = ref(true);
const backButtonVisible = ref(false);
const footerVisible = ref(true);

watch(route, () => {
  route.name === "chats"
    ? (searchButtonVisible.value = true)
    : ((searchButtonVisible.value = false), (footerVisible.value = true));
  route.name === "chat"
    ? ((backButtonVisible.value = true), (footerVisible.value = false))
    : (backButtonVisible.value = false);
});

function goBack() {
  console.log("asdf");

  router.go(-1);
}
</script>

<style scoped lang="scss"></style>
