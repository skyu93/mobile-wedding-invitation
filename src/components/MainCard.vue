<script setup lang="ts">
import { onMounted } from 'vue';
import dayjs from 'dayjs';
import { WeddingInfo } from '../types';

interface Props {
  modelValue: WeddingInfo;
}
const props = defineProps<Props>();
const weddingDate = dayjs(props.modelValue.date).format('YYYY년 MM월 DD일 dddd A hh시 mm분');
const date = dayjs(props.modelValue.date).format('YY | MM | DD');
const dayoftheWeek = dayjs(props.modelValue.date).format('dddd');

onMounted(() => {});
</script>

<template>
  <div class="main-card-warp">
    <div class="main-card-header">
      <div>{{ date }}</div>
      <div>{{ dayoftheWeek }}</div>
    </div>
    <div class="main-card-image">
      <img src="../assets/img.jpg" alt="Background Image" />
      <video autoplay loop playsinline muted>
        <source src="../assets/flower.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="main-card-footer">
      <div>{{ modelValue.groom }} | {{ modelValue.bride }}</div>
      <div>{{ weddingDate }}</div>
      <div>{{ modelValue.place }}</div>
    </div>
  </div>
</template>

<style scoped>
.main-card-image {
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
}

.main-card-image img,
.main-card-image video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.main-card-image img {
  display: block;
  object-fit: cover;
  margin: 0;
  padding: 0;
  z-index: 1;
}
.main-card-image video {
  z-index: 2;
  object-fit: cover;
  mix-blend-mode: screen;
}

.main-card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  padding: 10px;
}
.main-card-header > div:nth-child(1) {
  font-size: 1.5rem;
  font-weight: 900;
}
.main-card-header > div:nth-child(2) {
  font-size: 1.2rem;
  font-weight: 900;
}

.main-card-footer {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
}
.main-card-footer > div:nth-child(1) {
  font-size: 1.3rem;
  font-weight: 900;
}
.main-card-footer > div:nth-child(2) {
  color: rgb(84, 79, 79);
}
.main-card-footer > div:nth-child(3) {
  color: rgb(84, 79, 79);
}
</style>
