<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Wedding } from './types.ts';
import Particles from './components/particle/Particles.vue';
import Logo from './components/Logo.vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ko';

dayjs.locale('ko'); // locale을 한국어로 설정
dayjs.extend(duration);

const wedding: Wedding = {
  date: '2024-08-10 12:00',
  groomName: '김민선',
  brideName: '김민선',
};
const welcome = ref<HTMLElement>();
const weddingCard = ref<HTMLElement>();
const dateOfWedding = ref<HTMLElement>();
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
  io.observe(weddingCard.value as HTMLElement);
  io.observe(dateOfWedding.value as HTMLElement);
  welcome.value?.animate(
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
    <Particles :num-of-particle="100" />
    <header><Logo /></header>
    <main>
      <section ref="welcome" class="welcome">
        <Welcome :wedding="wedding" />
      </section>
      <section ref="weddingCard" class="weddingCard">
        <WeddingCard :wedding="wedding" />
      </section>
      <section ref="dateOfWedding" class="dateOfWedding">
        <DateOfWedding :date="wedding.date" />
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
.welcome {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
}
.weddingCard {
  height: 600px;
}
.dateOfWedding {
  height: 600px;
}
@media screen and (min-width: 674px) {
  .warp {
    width: 674px;
    margin: 0 auto;
  }
}
</style>
