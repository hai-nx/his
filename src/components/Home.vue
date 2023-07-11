<template>
  <div class="home-page">
    <menu-top></menu-top>
    <slider-top></slider-top>
    <div class="content">
      <Introduction></Introduction>
      <Solution></Solution>
      <Projects></Projects>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//import Utils from "../Utils";
import MenuTop from '@/components/MenuTop.vue'
import SliderTop from '@/components/SliderTop.vue'
import Introduction from '@/components/Introduction.vue'
import Solution from '@/components/Solution.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "Home",
  components: {
    'menu-top': MenuTop,
    'slider-top': SliderTop,
    Introduction,Solution,Projects,Footer
  },
  methods: {
    submitForm() {},
  },
  computed: {},
  mounted() {},
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
