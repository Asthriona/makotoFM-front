<template>
  <div class="spacer"></div>
  <div
    :class="`TheFuckingFooter mt-4 ${
      this.$route.name == 'Popup' ? 'hidden' : 'not-hidden'
    }`"
  >
    <v-footer padless>
      <v-row justify="center" no-gutters>
  
        
        <div class="links">
          <!-- <div class="links" v-for="link in links" :key="link.name"> -->
          <!-- changelogs -->
          <v-dialog>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="ChangeLogs" class="mb-2 mt-2"></v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card title="Change Logs">
          <v-card-text>
            <changelogs />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" @click="isActive.value = false"></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <!-- End Changelogs -->

    <!-- <router-link :to="link.link">
            <v-btn
              :key="link.name"
              class="my-2 nolink"
            >
              {{ link.name }}
            </v-btn>
          </router-link> -->
        </div>
        <v-card flat tile width="100%" class="primary lighten-2 text-center">
          <v-btn
            align="center"
            justify="center"
            v-for="icon in icons"
            :key="icon.name"
            :href="icon.link"
            class="mx-4"
            
          >
            <v-icon size="24px" disabled>{{ icon.name }}</v-icon>
          </v-btn>
        </v-card>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          2013 - {{ new Date().getFullYear() }} —
          <strong>Sora Media Network inc.</strong> <br />
          Powered by <strong>Stellar Corporation</strong>
          <v-col cols="12" class="primary lighten-2 py-4 text-center white--text">
            <!-- <span>Proudly Powered by:</span> <br />
              <div class="parthner" v-for="item in parthners" :key="item.name">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                  <v-img
                    :alt="item.name"
                    :src="item.src"
                    max-width="200"
                    height="50"
                    contain
                  ></v-img>
                </a>
              </div> -->
          </v-col>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup>
import changelogs from "@/components/changelogs.vue";
</script>

<script>
// import { EventBus } from '../../event-bus';

export default {
  name: "TheFooter",
  data() {
    return {
      padless: true,
      variant: "default",
      betaPlayer: false,
      parthners: [
        {
          name: "Azuracast",
          link: "https://www.azuracast.com/",
          src: "https://cdn.nishikino.xyz/cloudsdaleradio/azura-logo/AzuraCast%20Logo%20with%20Text%20for%20Light%20Backgrounds.svg",
        },
        {
          name: "bmf",
          link: "https://nishikino.xyz/",
          src: "https://cdn.nishikino.xyz/global/isolated-layout.svg",
        },
        {
          name: "Cloudflare",
          link: "https://www.cloudflare.com/",
          src: "https://cdn.nishikino.xyz/global/CF_logo_horizontal_blktype.svg",
        },
        {
          name: "Stellar Corporation",
          link: "https://stellar-corp.net/",
          src: "https://cdn.yukiko.app/web/stellar-logo.png",
        },
      ],
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about",
        },
        // {
        //   name: "Team",
        // },
        {
          name: "Services",
          link: "/services",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
      ],
      icons: [
        {
          name: "mdi-twitter",
          link: "https://twitter.com/CloudsdaleRadio",
        },
        // {
        //   name: "mdi-discord",
        //   link: "https://discord.gg/XZYZY",
        // },
        {
          name: "mdi-facebook",
          link: "https://www.facebook.com/CloudsdaleRadio/",
        },
        // {
        //   name: "mdi-instagram",
        //   link: "https://www.instagram.com/cloudsdale_radio/",
        // },
        {
          name: "mdi-youtube",
          link: "https://www.youtube.com/user/TheLilyPanther",
        },
      ],
    };
  },
  beforeMount() {
    if (!localStorage.getItem("CR_betaPlayer")) {
      localStorage.setItem("CR_betaPlayer", false);
    }
    if (localStorage.getItem("CR_betaPlayer") === "true") {
      this.betaPlayer = true;
    }
  },
  methods: {
    enableBetaPlayer() {
      this.betaPlayer = true;
      // Not working yet. Need to fix this.
      // EventBus.$emit("betaPlayer", true);
      localStorage.setItem("CR_betaPlayer", true);
      window.location.reload();
    },
    disableBetaPlayer() {
      this.betaPlayer = false;
      // Not working yet. Need to fix this.
      // EventBus.$emit("betaPlayer", false);
      localStorage.setItem("CR_betaPlayer", false);
      window.location.reload();
    },
  },
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style scoped>
.parthner {
  display: inline-block;
  margin: 0 10px;
  max-width: 900px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 1s ease;
}
.parthner:hover {
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  filter: grayscale(0%);
}
.nolink {
  text-decoration: none !important;
  color: ivory;
}
.spacer {
  margin-top: 100px;
}
.img-footer {
    text-align: center;
}
</style>
