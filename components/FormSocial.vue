<template>
  <div>
    <p class="social-title">Поделитесь</p>
    <div class="social-icons">
      <ul class="icons-list">
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/Facebook.png" class="icons-image"
          /></a>
        </li>
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/Twitter.png" class="icons-image"
          /></a>
        </li>
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/Vkontakte (VK).png" class="icons-image"
          /></a>
        </li>
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/Odnoklassniki (OK).png" class="icons-image"
          /></a>
        </li>
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/Instagram.png" class="icons-image"
          /></a>
        </li>
        <li class="icons-item">
          <a href="#" class="icons-link"
            ><img src="../static/YouTube.png" class="icons-image"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icons-list {
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
}

.icons-item {
  margin-left: 20px;
}

.icons-item:first-child {
  margin-left: 0px;
}

.social-icons {
  margin: 100px 225px 60px;
}

.social-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
  margin-left: 325px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .social-icons {
    margin: 100px 165px 60px;
  }
  .social-title {
    margin-left: 265px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .social-icons {
    margin: 100px 165px 60px;
  }
  .social-title {
    margin-left: 265px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .social-icons {
    margin: 100px 58px 60px;
  }

  .social-title {
    margin-left: 160px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .social-icons {
    margin: 70px 0px 35px;
  }

  .social-title {
    font-size: 18px;
    line-height: 21px;
    margin-left: 85px;
  }
  .icons-image {
    width: 30px;
  }
}
</style>
