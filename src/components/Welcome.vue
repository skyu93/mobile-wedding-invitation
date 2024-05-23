<script setup lang="ts">
import CountDown from './count-down.vue';
import { Wedding } from '../types.ts';
import { onMounted } from 'vue';

interface Props {
  wedding: Wedding;
}
const props = defineProps<Props>();

onMounted(() => {});
</script>

<template>
  <div class="warp">
    <div>SAVE THE DATE</div>
    <CountDown :date="props.wedding.date" />
  </div>
</template>

<style scoped>
.warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.warp > div:nth-child(1) {
  font-size: 1.7rem;
  color: black;
}
</style>
