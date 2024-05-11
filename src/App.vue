<script setup lang="ts">
import Particles from './components/particle/particles.vue';
import DateOfWedding from './components/date-of-wedding.vue';
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';

const wedding = {
  date: '2024-08-10 12:00',
  groomName: '김민선',
  brideName: '김민선',
};

const weddingDate = dayjs(wedding.date).format('YYYY.MM.DD');

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
const welcome = ref<HTMLElement>();
const refDateOfWedding = ref<HTMLElement>();
const invitationMessage = ref<HTMLElement>();

onMounted(() => {
  io.observe(refDateOfWedding.value as HTMLElement);
  io.observe(invitationMessage.value as HTMLElement);

  welcome.value?.animate(
    [
      {
        transform: `translateY(100vh)`,
        opacity: 0,
      },
      {
        transform: `translateY(-30px)`,
        opacity: 0.5,
      },
      {
        transform: `translateY(0)`,
        opacity: 1,
      },
    ],
    {
      duration: 2000,
      iterations: 1,
      fill: 'both',
      easing: 'ease-out',
      delay: 1000,
    },
  );

  const heartElement = document.querySelector('#heart') as HTMLElement;
  const player = heartElement.animate(
    [{ transform: `scale(1)` }, { transform: `scale(1.5)` }, { transform: `scale(0.8)` }, { transform: `scale(1.3)` }],
    {
      duration: 400,
      iterations: 1,
      fill: 'forwards',
      easing: 'linear',
    },
  );
  player.onfinish = () => {
    setTimeout(() => {
      player.play();
    }, 1000);
  };
});
</script>

<template>
  <div class="warp">
    <particles :num-of-particle="20" />
    <header style="color: black">
      <div>logo</div>
      <nav>
        <div>contact</div>
        <div>nav</div>
      </nav>
    </header>
    <main>
      <section ref="welcome" class="welcome">
        <div class="welcome-content">
          <div>{{ weddingDate }}</div>
          <div>
            {{ wedding.groomName }} <img id="heart" width="30px" src="./assets/heart.svg" alt="하트" />
            {{ wedding.brideName }}
          </div>
          <div>결혼식에 초대합니다.</div>
        </div>
      </section>
      <section ref="refDateOfWedding" class="date-of-wedding">
        <DateOfWedding :date="wedding.date" />
      </section>
      <section ref="message"></section>
      <section ref="invitationMessage"></section>
      <section ref="contact"></section>
      <section ref="gallery"></section>
      <section ref="location"></section>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
header {
  position: static;
  top: 0;
  height: 30px;
  display: flex;
  background-color: transparent;
  z-index: 999;
}
nav {
  position: absolute;
  right: 0;
  display: flex;
}
.warp {
  contain: paint;
}

.welcome {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translate3d(0px, -30px, 0px);
}
.welcome-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.welcome-content > div:nth-child(1) {
  font-size: 2rem;
  color: black;
}
.welcome-content > div:nth-child(2) {
  font-size: 3.5rem;
  font-weight: bold;
  color: #747bff;
}
.welcome-content > div:nth-child(3) {
  font-size: 1.6rem;
  color: #747bff;
}

.date-of-wedding {
  position: relative;
  height: 100%;
  margin: 200px 0;
  opacity: 0;
}

@media screen and (min-width: 674px) {
  .warp {
    width: 674px;
    margin: 0 auto;
  }
}
</style>
