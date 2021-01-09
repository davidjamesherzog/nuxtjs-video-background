<template>
  <div>
    <section class="showcase" :class="{ active: active }">
      <app-header @menu="toggleMenu" />
      <background-video />
      <div class="overlay"></div>
      <div class="text">
        <h2>Make your player yours</h2>
        <h3>most popular open source HTML5 player framework</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#">Explore</a>
      </div>
      <social-links />
    </section>
    <app-menu />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggleMenu() {
      this.active = !this.active;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
/* @import '/node_modules/video.js/dist/video-js.min.css'; */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  transition: 0.5s;
  z-index: 2;
}
.showcase.active {
  right: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #03a9f4;
  mix-blend-mode: overlay;
}
.text {
  position: relative;
  z-index: 10;
}

.text h2 {
  font-size: 4em;
  font-weight: 800;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text h3 {
  font-size: 2.5em;
  font-weight: 700;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text p {
  font-size: 1.1em;
  color: #fff;
  margin: 20px 0;
  font-weight: 400;
  max-width: 700px;
}
.text a {
  display: inline-block;
  font-size: 1em;
  background: #fff;
  padding: 10px 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  color: #111;
  letter-spacing: 2px;
  transition: 0.2s;
}
.text a:hover {
  letter-spacing: 3px;
}

@media (max-width: 991px) {
  .showcase,
  .showcase header {
    padding: 40px;
  }
  .text h2 {
    font-size: 3em;
  }
  .text h3 {
    font-size: 1.5em;
  }
}
</style>
