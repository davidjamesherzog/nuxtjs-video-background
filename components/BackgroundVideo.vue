<template>
  <video
    id="video-player"
    class="video-js vjs-theme-sea"
    data-background-video
  />
</template>

<script>
import videojs from 'video.js';

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      video: null
    };
  },
  mounted() {
    this.video = videojs('video-player', {
      autoplay: true,
      loop: true,
      muted: true,
      controls: false,
      techOrder: ['html5']
    });
    this.video.src([
      {
        type: 'video/mp4',
        src: this.src
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
#video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}
</style>
