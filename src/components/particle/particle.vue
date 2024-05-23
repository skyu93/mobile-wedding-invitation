<script setup lang="ts">
import { onMounted } from 'vue';
import { generateRandomParticleAniOptions } from './index.ts';

const props = defineProps({
  numOfParticle: { type: Number, required: true },
});
const particles = Array.from({ length: props.numOfParticle ?? 0 });

onMounted(() => {
  const particles = document.querySelectorAll('.particle-item');
  particles.forEach((e, idx) => {
    const { keyframes, options } = generateRandomParticleAniOptions(500 * idx);
    e.animate(keyframes, options);
  });
});
</script>

<template>
  <div class="particles">
    <div v-for="(_, idx) in particles" :key="`particle_${idx}`" class="particle-item"></div>
  </div>
</template>

<style scoped>
.particles {
  position: absolute;
  background-color: transparent;
  margin: 0 auto;
  width: 95vw;
  height: 120vh;
}
.particle-item {
  position: absolute;
  width: 10px;
  height: 10px;
  font-size: 0;
  border-radius: 50%;
}
</style>
