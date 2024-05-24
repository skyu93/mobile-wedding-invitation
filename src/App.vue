<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { WeddingInfo } from './types';
import Logo from './components/Logo.vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ko';
import Particle from './components/particle/particle.vue';
import MainCard from './components/MainCard.vue';
import Welcome from './components/Welcome.vue';
import DateOfWedding from './components/DateOfWedding.vue';
import Location from './components/Location.vue';

dayjs.locale('ko'); // locale을 한국어로 설정
dayjs.extend(duration);

const weddingInfo: WeddingInfo = {
  date: '2024-08-10 12:00',
  groomName: '김민선',
  brideName: '김민선',
};
const welcomeEl = ref<HTMLElement>();
const mainCardEl = ref<HTMLElement>();
const dateOfWeddingEl = ref<HTMLElement>();
const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    // 타겟 엘리먼트와 교차되었는지 || 현재 이전 데이터 로딩중 확인
    if (!entry.isIntersecting) return;
    entry.target.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 2000,
      iterations: 1,
      fill: 'both',
      easing: 'linear',
      delay: 500,
    });
  });
});

//

onMounted(() => {
  io.observe(mainCardEl.value as HTMLElement);
  io.observe(dateOfWeddingEl.value as HTMLElement);
  welcomeEl.value?.animate(
    [
      {
        transform: `translateY(80px)`,
        opacity: 0,
      },
      {
        opacity: 0.4,
      },
      { transform: `translateY(0)`, opacity: 1 },
    ],
    {
      duration: 3500,
      iterations: 1,
      fill: 'both',
      easing: 'ease-out',
      delay: 1000,
    },
  );
});
</script>

<template>
  <div class="warp">
    <particle :num-of-particle="100" />
    <header><Logo /></header>
    <main>
      <section ref="welcomeEl" class="warp-welcome">
        <Welcome :model-value="weddingInfo" />
      </section>
      <section ref="mainCardEl" class="warp-main-card">
        <MainCard :model-value="weddingInfo" />
      </section>
      <section ref="dateOfWeddingEl" class="warp-date-of-wedding">
        <DateOfWedding :date="weddingInfo.date" />
      </section>
      <section>
        <Location />
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
.warp {
  contain: paint;
}

header {
  position: static;
  top: 0;
  height: 50px;
  display: flex;
  z-index: 999;
}
main {
  height: 3000px;
}
.warp-welcome {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
}
.warp-main-card {
  height: 600px;
}
.warp-date-of-wedding {
  height: 600px;
}
@media screen and (min-width: 674px) {
  .warp {
    width: 674px;
    margin: 0 auto;
  }
}
</style>
