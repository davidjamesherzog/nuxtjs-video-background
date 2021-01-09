<template>
  <ul class="social">
    <li>
      <a href="#"><img src="~/assets/images/facebook.png" /></a>
    </li>
    <li>
      <a href="#"><img src="~/assets/images/twitter.png" /></a>
    </li>
    <li>
      <a href="#"><img src="~/assets/images/instagram.png" /></a>
    </li>
  </ul>
</template>

<style scoped>
.social {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social li {
  list-style: none;
}
.social li a {
  display: inline-block;
  margin-right: 20px;
  filter: invert(1);
  transform: scale(0.5);
  transition: 0.5s;
}
.social li a:hover {
  transform: scale(0.5) translateY(-15px);
}
</style>
