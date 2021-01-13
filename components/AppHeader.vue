<template>
  <header>
    <h2 class="logo" data-app-header-logo>video.js</h2>
    <div
      class="toggle"
      :class="{ active: active }"
      data-app-header-toggle
      @click="toggleMenu"
    ></div>
  </header>
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
      this.$emit('menu');
    }
  }
};
</script>

<style lang="scss" scoped>
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

  .logo {
    color: $color-brand-white;
    text-transform: uppercase;
    cursor: pointer;
  }

  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    background: url('../assets/images/menu.png');
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
    cursor: pointer;

    &.active {
      background: url('../assets/images/close.png');
      background-repeat: no-repeat;
      background-size: 25px;
      background-position: center;
      cursor: pointer;
    }
  }
}

@media (max-width: 991px) {
  header {
    padding: 40px;
  }
}
</style>
