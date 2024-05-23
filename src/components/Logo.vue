<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const audio = document.getElementById('bose') as HTMLAudioElement;
  const img = document.getElementById('boseImg') as HTMLImageElement;
  let analyser: AnalyserNode | null = null;
  function initializeAudioContext() {
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!analyser) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(dataArray);

    const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
    const upperHalfArray = dataArray.slice(dataArray.length / 2 - 1, dataArray.length - 1);

    const lowerMax = Math.max(...lowerHalfArray);
    const upperAvg = upperHalfArray.reduce((acc, val) => acc + val, 0) / upperHalfArray.length;

    const beat = (lowerMax + upperAvg) / 256;
    if (beat > 0.78) {
      img.style.transform = `scale(${beat})`;
    }
  }

  window.addEventListener('click', () => {
    if (!analyser) initializeAudioContext();
    audio.play();
    animate();
  });
});
</script>
<template>
  <div>
    <img id="boseImg" src="../assets/bose_logo.svg" alt="Bose Logo" />
    <audio id="bose">
      <source src="../assets/piano.mp3" type="audio/mpeg" />
      Your browser does not support the audio
    </audio>
  </div>
</template>

<style scoped>
img {
  transition: transform 0.1s ease;
  object-fit: cover;
}
</style>
