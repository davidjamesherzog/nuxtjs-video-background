<template>
  <div class="menu">
    <ul>
      <li><a href="https://videojs.com/getting-started">Get Started</a></li>
      <li>
        <a href="https://videojs.com/getting-started/#customize">Customize</a>
      </li>
      <li><a href="https://docs.videojs.com/">Docs</a></li>
      <li><a href="https://videojs.com/blog">Blog</a></li>
      <li><a href="https://github.com/videojs/video.js">Github</a></li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu ul {
  position: relative;
}
.menu ul li {
  list-style: none;
}
.menu ul li a {
  text-decoration: none;
  font-size: 24px;
  color: #111;
}
.menu ul li a:hover {
  color: #03a9f4;
}
</style>
