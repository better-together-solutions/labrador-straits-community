<template>
  <b-navbar-brand href="/">
    <img
      class="logo"
      src="../assets/logo-labrador-straits-community-714x200px.png"
      alt="Labrador Straits Community"
    >
  </b-navbar-brand>
</template>

<script>
export default {
  name: 'BrandingLogo',
}
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

.logo {
  height: 10vh;
}
.navbar-brand {
  margin-right: 5vw;
}

@include media-breakpoint-down(lg) {
  .logo {
    height: 7vh;
  }
}
</style>
