<script setup lang="ts">
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { onBeforeUnmount, onMounted, reactive } from 'vue';
import 'dayjs/locale/ko'; // 한국어 locale 로드

dayjs.locale('ko'); // locale을 한국어로 설정
dayjs.extend(duration);

const props = defineProps({
  date: { type: String, required: true },
});
const targetDate = dayjs(props.date);
const remainingTime = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const updateCountdown = () => {
  const now = dayjs();
  const diff = targetDate.diff(now);
  const duration = dayjs.duration(diff);
  return {
    days: Math.trunc(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
};

let intervalId = -1;
onMounted(() => {
  intervalId = setInterval(() => {
    Object.assign(remainingTime, updateCountdown());
  }, 330);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="container">
    <div class="countdown">
      <div class="time-unit">
        <span class="number">{{ remainingTime.days }}</span>
        <span class="label">DAYS</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ remainingTime.hours }}</span>
        <span class="label">HOUR</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ remainingTime.minutes }}</span>
        <span class="label">MIN</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ remainingTime.seconds }}</span>
        <span class="label">SEC</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 370px;
  margin: auto;
}
.countdown {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  color: black;
  width: 300px;
}
.time-unit {
  display: flex;
  width: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.time-unit .number {
  font-size: 3rem;
  color: #333;
}
.time-unit .label {
  font-size: 0.8rem;
  color: #666;
}
</style>
