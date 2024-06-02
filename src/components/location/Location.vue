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
</script>

<template>
  <div class="warp">
    <div class="header-location">
      <div class="header-location-title">
        <div>LOCATION</div>
        <div>오시는길</div>
      </div>
      <div class="header-location-address">
        <div>웨딩여율리 5층 ---</div>
        <div>서울 영등포구 여의도동 35</div>
      </div>
    </div>
    <div class="map"></div>
    <div class="waytocome-wrap">
      <div class="box fade-in" style="opacity: 1; transform: translate(0px, 0px)">
        <div class="left">
          <div class="icon-circle">
            <svg
              aria-hidden="true"
              width="46.08"
              height="46.08"
              viewBox="0 0 32 32"
              fill="#222F3D"
              style="font-size: 2.88em"
            >
              <path
                d="M10 4C7.25 4 5 6.25 5 9v12a6.012 6.012 0 003.531 5.469L6 29h2.344l2.031-2.031c.2.02.418.031.625.031h10c.207 0 .426-.012.625-.031L23.656 29H26l-2.531-2.531A6.012 6.012 0 0027 21V9c0-2.75-2.25-5-5-5zm0 2h12c1.32 0 2.438.828 2.844 2H7.156A2.992 2.992 0 0110 6zm-3 4h8v6H7zm10 0h8v6h-8zM7 18h18v3c0 2.219-1.781 4-4 4H11c-2.219 0-4-1.781-4-4zm3.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="right">
          <div class="title"><span>지하철</span></div>
          <div class="content">
            <div>
              [분당선] <span class="c-bold">서울숲역</span> 5번 출구 도보 2분 [2호선]
              <span class="c-bold">뚝섬역</span> 8번 출구 도보 5분
            </div>
          </div>
        </div>
      </div>
      <div class="box fade-in" style="opacity: 1; transform: translate(0px, 0px)">
        <div class="left">
          <div class="icon-circle">
            <svg
              aria-hidden="true"
              width="46.08"
              height="46.08"
              viewBox="0 0 32 32"
              fill="#222F3D"
              style="font-size: 2.88em"
            >
              <path
                d="M9 4C6.8 4 5 5.8 5 8v5H3v3h2v11c0 .55.45 1 1 1h3l.344-1h13.312L23 28h3c.55 0 1-.45 1-1V16h2v-3h-2V8c0-2.2-1.8-4-4-4zm0 2h14c1.117 0 2 .883 2 2H7c0-1.117.883-2 2-2zm-2 4h8v7H7zm10 0h8v7h-8zM7 19h18v6H7zm1 2v2h4v-2zm12 0v2h4v-2z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="right">
          <div class="title"><span>버스</span></div>
          <div class="content">
            <div>
              뚝섬 서울숲 정류장 121, 141, 145, 148, 463
              <p></p>
              뚝섬역 8번 출구 정류장 2016, 2224, 2413
            </div>
          </div>
        </div>
      </div>
      <div class="box fade-in" style="opacity: 1; transform: translate(0px, 0px)">
        <div class="left">
          <div class="icon-circle">
            <svg
              aria-hidden="true"
              width="46.08"
              height="46.08"
              viewBox="0 0 24 24"
              fill="#222F3D"
              style="font-size: 2.88em"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 3h7a6 6 0 110 12H8v6H6V3zm2 2v8h5a4 4 0 100-8H8z"></path>
            </svg>
          </div>
        </div>
        <div class="right">
          <div class="title"><span>주차안내</span></div>
          <div class="content">
            <div>
              건물 내 B3-B7 2시간 무료주차 안내 데스크에서 <span class="c-bold"><u>주차권</u></span> 수령
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
