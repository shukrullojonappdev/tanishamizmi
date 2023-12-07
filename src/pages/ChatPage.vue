<template>
  <q-page>
    <div class="container">
      <div class="messages">
        <q-virtual-scroll
          ref="messages"
          scroll-target=".messages"
          :items="heavyList"
          separator
          v-slot="{ item, index }"
        >
          <q-chat-message
            :key="index"
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['hey, how are you?', index]"
            sent
          />
        </q-virtual-scroll>
      </div>
      <q-input class="input" ref="input" v-model="text" filled autogrow />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

const text = ref("");
const messages: any = ref(null);
const input: any = ref(null);

const maxSize = 10000;
const heavyList: any = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1),
  });
}

onMounted(() => {
  messages.value.scrollTo(heavyList.length - 2);
  console.log(input.value);
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
}
.messages {
  position: absolute;
  top: 0;
  bottom: 100px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.messages::-webkit-scrollbar {
  display: none;
}
</style>
