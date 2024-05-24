<script setup lang="ts">
import { onMounted } from 'vue';
import dayjs from 'dayjs';
import { WeddingInfo } from '../types';

interface Props {
  modelValue: WeddingInfo;
}
const props = defineProps<Props>();
const weddingDate = dayjs(props.modelValue.date).format('YYYY.MM.DD dddd');

onMounted(() => {});
</script>

<template>
  <div class="warp">
    <div class="header">
      <div>{{ weddingDate }}</div>
      <div>{{ weddingDate }}</div>
    </div>
    <div>
      <img src="../assets/img.jpg" alt="Background Image" />
      <video autoplay loop playsinline muted>
        <source src="../assets/flower.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="footer">
      <div>김민선 | 김민선</div>
      <div>{{ weddingDate }}</div>
      <div>아펠가모 광화문 B2</div>
    </div>
  </div>
</template>

<style scoped>
.warp {
  width: 300px !important;
}
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin: 0; /* 이미지 주위의 마진을 제거 */
  padding: 0; /* 이미지 주위의 패딩을 제거 */
}
video {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 406px;
  object-fit: cover;
  mix-blend-mode: screen;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
}
</style>
