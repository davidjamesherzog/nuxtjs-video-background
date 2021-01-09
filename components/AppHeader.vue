<template>
  <header>
    <h2 class="logo">video.js</h2>
    <div class="toggle" :class="{ active: active }" @click="toggleMenu"></div>
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

<style scoped>
header .logo {
  color: #fff;
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
}

.toggle.active {
  background: url('../assets/images/close.png');
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: center;
  cursor: pointer;
}
</style>
