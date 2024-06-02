<script setup lang="ts">
import dayjs from 'dayjs';
import { onBeforeUnmount, onMounted, reactive } from 'vue';
import { WeddingInfo } from '../types';

interface Props {
  modelValue: WeddingInfo;
}
const props = defineProps<Props>();
const targetDate = dayjs(props.modelValue.date);
const time = `${targetDate.format('dddd')} ${targetDate.format('A hh시 mm분')}`;
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
  <div class="date-of-wedding-warp">
    <div class="date-of-wedding-header">
      <div class="date">{{ targetDate.format('YYYY.MM.DD') }}</div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="calendar">
      <img src="/src/assets/calender.svg" alt="달력" style="width: 100%; height: auto" />
    </div>
    <div class="message">
      {{ modelValue.groom.substring(1) }} <span style="color: #ea7664">♥</span> {{ modelValue.bride.substring(1) }}의
      결혼식이 <span class="highlight">{{ `${remainingTime.days}일` }}</span> 남았습니다.
    </div>
  </div>
</template>

<style scoped>
.date-of-wedding-warp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 30px 0;
  background-color: #f6f5f5;
}
.date-of-wedding-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.date {
  font-size: 1.4rem;
  color: #333;
}
.time {
  font-size: 0.9rem;
  color: #333;
}
.message {
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}
.highlight {
  color: #ea7664;
  font-weight: bold;
  font-size: 1.4rem;
}
</style>
