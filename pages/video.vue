<template>
  <div>
    <video id="video-player" class="video-js vjs-theme-sea" />
    <div>
      <button @click="changeVideo">Change Video</button>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  data() {
    return {
      video: null
    };
  },
  mounted() {
    this.changeVideo();
  },
  methods: {
    changeVideo() {
      this.video = videojs('video-player', {
        autoplay: true,
        controls: true,
        techOrder: ['html5']
      });
      this.video.src([
        {
          type: 'video/mp4',
          src: '//vjs.zencdn.net/v/oceans.mp4'
        }
      ]);
    }
  }
};
</script>
