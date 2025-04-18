<template>
  <HelloWorld />
  <Footer />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/TheFooter.vue"
export default {
  name: "home-view",
  components: {
    HelloWorld,
    Footer,
  },
};
</script>
