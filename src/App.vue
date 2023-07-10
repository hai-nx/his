<template>
  <div>
    <div  id="app">
      <b-container fluid>
        <div class="row">
          <div class="col-12">
            <router-view />
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
//import EventBus from "@/utils/eventBus";

export default {
  name: "App",
  components: {},
  mounted() {
    var $this = this;
    Utils.$bvToast = $this.$bvToast;
    Utils.$createElement = $this.$createElement;
  },
  methods: {
    
  },

  computed: {},
  data: function() {
    return {
      
    };
  },
};
</script>

<style src="./styles/styles.scss" lang="scss"></style>
<style lang="scss">
#app {
  transition: 0.3s ease;
  .content {
    height: 100vh;
  }
}
#app.collapsed {
  padding-left: 50px;
}
#app.isClient {
  padding-left: 0px !important;
}
</style>
