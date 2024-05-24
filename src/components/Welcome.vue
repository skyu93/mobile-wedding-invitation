<script setup lang="ts">
import CountDown from './CountDown.vue';
import { onMounted } from 'vue';
import { WeddingInfo } from '../types';

interface Props {
  modelValue: WeddingInfo;
}
const props = defineProps<Props>();

onMounted(() => {});
</script>

<template>
  <div class="warp">
    <div>SAVE THE DATE</div>
    <CountDown :date="props.modelValue.date" />
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
