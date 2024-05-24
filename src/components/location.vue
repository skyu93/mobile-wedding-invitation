<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  if (!window.naver || !window.naver.maps) {
    console.error('Naver Maps API is not loaded');
    return;
  }

  /* eslint-disable no-undef */
  const mapOptions = {
    center: new naver.maps.LatLng(37.5218332, 126.9270875),
    zoom: 17,
  };
  const map = new naver.maps.Map('map', mapOptions);

  new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5218332, 126.9270875),
    map: map,
  });
  /* eslint-enable no-undef */
});
</script>

<template>
  <div>
    <div id="map" style="width: 800px; height: 400px"></div>
  </div>
</template>

<style scoped></style>
