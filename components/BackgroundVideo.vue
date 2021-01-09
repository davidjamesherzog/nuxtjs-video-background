<template>
  <video muted loop autoplay>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
</style>
