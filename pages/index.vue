<template>
  <div>
    <section class="showcase" :class="{ active: active }">
      <app-header @menu="toggleMenu" />
      <client-only>
        <background-video src="//vjs.zencdn.net/v/oceans.mp4" />
      </client-only>
      <overlay />
      <div class="text">
        <h2>Make your player yours</h2>
        <h3>most popular open source HTML5 player framework</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="https://videojs.com/getting-started">Explore</a>
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

<style lang="scss">
.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $color-brand-black;
  transition: 0.5s;
  z-index: 2;

  &.active {
    right: 300px;
  }

  .text {
    position: relative;
    z-index: 10;

    h2 {
      font-size: 4em;
      font-weight: 800;
      color: $color-brand-white;
      line-height: 1em;
      text-transform: uppercase;
    }

    h3 {
      font-size: 2.5em;
      font-weight: 700;
      color: $color-brand-white;
      line-height: 1em;
      text-transform: uppercase;
    }

    p {
      font-size: 1.1em;
      color: $color-brand-white;
      margin: 20px 0;
      font-weight: 400;
      max-width: 700px;
    }

    a {
      display: inline-block;
      font-size: 1em;
      background: $color-brand-white;
      padding: 10px 30px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      margin-top: 10px;
      color: $color-brand-black;
      letter-spacing: 2px;
      transition: 0.25s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 991px) {
  .showcase {
    padding: 40px;

    .text h2 {
      font-size: 3em;
    }
    .text h3 {
      font-size: 1.5em;
    }
  }
}
</style>
