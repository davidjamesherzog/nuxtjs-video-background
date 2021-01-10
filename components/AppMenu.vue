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

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    position: relative;

    li {
      list-style: none;

      a {
        text-decoration: none;
        font-size: 24px;
        color: $color-brand-black;

        &:hover {
          color: $color-brand-blue;
        }
      }
    }
  }
}
</style>
