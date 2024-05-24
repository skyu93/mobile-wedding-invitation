<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  /* eslint-disable no-undef */
  // const mapOptions = {
  //   center: new naver.maps.LatLng(37.5218332, 126.9270875),
  //   zoom: 17,
  // };
  // const map = new naver.maps.Map('map', mapOptions);
  //
  // new naver.maps.Marker({
  //   position: new naver.maps.LatLng(37.5218332, 126.9270875),
  //   map: map,
  // });
});
const openNaverMap = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') > -1) {
    window.location.href = 'intent://search#Intent;scheme=nmap;package=com.nhn.android.nmap;end';
  } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
    window.location.href = 'nmap://search';
  } else {
    alert('이 기능은 안드로이드와 iOS에서만 지원됩니다.');
  }
};

function openKakaoMap() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') > -1) {
    window.location.href = 'intent://open#Intent;scheme=kakaomap;package=net.daum.android.map;end';
  } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
    window.location.href = 'kakaomap://open';
  } else {
    alert('이 기능은 안드로이드와 iOS에서만 지원됩니다.');
  }
}

function openTMap() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') > -1) {
    window.location.href = 'intent://search#Intent;scheme=tmap;package=com.skt.tmap.ku;end';
  } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
    window.location.href = 'tmap://search';
  } else {
    alert('이 기능은 안드로이드와 iOS에서만 지원됩니다.');
  }
}

function openToss() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') > -1) {
    window.location.href = 'intent://send#Intent;scheme=toss;package=vn.toss;end';
  } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
    window.location.href = 'toss://send';
  } else {
    alert('이 기능은 안드로이드와 iOS에서만 지원됩니다.');
  }
}
</script>

<template>
  <div>
    <button @click="openNaverMap()">네이버 지도 열기</button>
    <button @click="openKakaoMap()">카카오톡 지도 열기</button>
    <button @click="openTMap()">티맵 열기</button>
    <button @click="openToss()">토스 송금 열기</button>
  </div>
</template>

<style scoped></style>
