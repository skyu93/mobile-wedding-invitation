<script setup lang="ts">
import dayjs from 'dayjs';
import { onBeforeUnmount, onMounted, reactive } from 'vue';

const props = defineProps({
  date: { type: String, required: true },
});

const targetDate = dayjs(props.date);
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
  <div class="container">
    <div class="date-header">
      <div class="date">{{ targetDate.format('YYYY.MM.DD') }}</div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="calendar">
      <img src="/src/assets/calender.svg" alt="달력" style="width: 100%; height: auto" />
    </div>
    <!--    <div class="countdown">-->
    <!--      <div class="time-unit">-->
    <!--        <span class="number">{{ remainingTime.days }}</span-->
    <!--        ><span class="label">DAYS</span>-->
    <!--      </div>-->
    <!--      <div class="time-unit">-->
    <!--        <span class="number">{{ remainingTime.hours }}</span-->
    <!--        ><span class="label">HOUR</span>-->
    <!--      </div>-->
    <!--      <div class="time-unit">-->
    <!--        <span class="number">{{ remainingTime.minutes }}</span-->
    <!--        ><span class="label">MIN</span>-->
    <!--      </div>-->
    <!--      <div class="time-unit">-->
    <!--        <span class="number">{{ remainingTime.seconds }}</span-->
    <!--        ><span class="label">SEC</span>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="message">
      민선 <span style="color: #ea7664">♥</span> 민선의 결혼식이
      <span class="highlight">{{ `${remainingTime.days}일` }}</span> 남았습니다.
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
  background: #f6f5f5;
}
.date-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.date,
.time {
  font-size: 1.5rem;
  color: #333;
}

.countdown {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  color: black;
  width: 100%;
}

.time-unit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: #f2eeee;
  padding: 6px;
  border-radius: 10px;
}
.time-unit .number {
  font-size: 1.5rem;
  color: #333;
}

.time-unit .label {
  font-size: 1rem;
  color: #666;
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
