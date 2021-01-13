<template>
  <ul class="social" data-social-links>
    <li>
      <a href="#" data-social-links-facebook
        ><img src="~/assets/images/facebook.png" data-social-links-facebook-img
      /></a>
    </li>
    <li>
      <a href="https://twitter.com/@videojs" data-social-links-twitter>
        <img src="~/assets/images/twitter.png" data-social-links-twitter-img />
      </a>
    </li>
    <li>
      <a href="#" data-social-links-instagram
        ><img
          src="~/assets/images/instagram.png"
          data-social-links-instagram-img
      /></a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;

    a {
      display: inline-block;
      margin-right: 20px;
      filter: invert(1);
      transform: scale(0.5);
      transition: 0.5s;

      &:hover {
        transform: scale(0.5) translateY(-15px);
      }
    }
  }
}
</style>
