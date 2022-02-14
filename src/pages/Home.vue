<template>
  <div
    id="home"
    class=""
  >
    <img
      class="bt-banner img-fluid mx-auto d-block"
      :src="BannerImg"
      alt="L'anse au Loup at Sunrise"
    >
  </div>
</template>

<script>
// @ is an alias to /src
import BannerImg from '../assets/lanse-au-loup-sunrise-rsmith-20211230_082857.jpg'

export default {
  name: 'Home',
  data() {
    return {
      BannerImg,
    }
  },
}
</script>

<style scoped lang="scss">
  h2 {
    margin-bottom: 1.5rem;
  }

  .bt-banner {
    margin-bottom: 15px;
    border-radius: 10px;
  }
</style>
