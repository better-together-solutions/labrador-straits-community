<template>
  <div id="app">
    <BtHeader background-style="light">
      <template #branding-logo>
        <BrandingLogo />
      </template>
    </BtHeader>
    <BtMainContent />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { BtHeader, BtMainContent } from '@bettertogether/community-engine-vue'
import BrandingLogo from './components/BrandingLogo.vue'

export default {
  name: 'BtApp',
  components: {
    BrandingLogo,
    BtHeader,
    BtMainContent,
  },
  mounted() {
    this.setHeaderMenuItems([
      {
        id: 0,
        external: false,
        label: 'About',
        path: '/about',
        title: 'About the Labrador Straits Community',
        sortOrder: 0,
      },
      {
        id: 1,
        external: true,
        label: 'Community Voice',
        url: '//voice.labradorstraits.community/',
        target: 'voice',
        title: 'Labrador Straits Community Voice',
        sortOrder: 1,
      },
      {
        id: 4,
        external: true,
        label: 'Contact',
        url: '//voice.labradorstraits.community/contact',
        title: 'Contact the Labrador Straits Community',
        sortOrder: 4,
      },
    ])
    this.setCustomizationOptions({
      backgroundColor: '#FFF',
    })
  },
  methods: {
    ...mapActions('CommunityEngine/Menus', ['setHeaderMenuItems']),
    ...mapActions('CommunityEngine/Communities', ['setCustomizationOptions']),
  },
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';
@import 'stylesheets/theme.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $default-text-color;

  a {
    color: $accent-color;

    &:hover {
      color: $accent-color;
    }
  }

  .btn-primary {
    color: $default-text-color-bg-dark;
    background-color: $accent-color;
    border-color: $accent-color;

    &:hover, &:focus, &:active {
      color: $default-text-color-bg-dark;
      background-color: #399f71;
      border-color: #399f71;
    }
  }

  header,
  footer {
    // width: 100vw;
    // height: 15vh;
    padding: 0;

    .navbar-nav {
      a {
        font-weight: bold;
        color: $default-text-color;

        &.router-link-exact-active,
        &:hover {
          color: $accent-color;
        }
      }

      @include media-breakpoint-up(md) {
        li.nav-item {
          margin-right: 1vw;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(lg) {
    header,
    footer {
      height: 10vh;
    }
  }
}

.b-toaster.b-toaster-top-center .b-toaster-slot,
.b-toaster.b-toaster-top-right .b-toaster-slot, {
  top: 10vh;
}
</style>
