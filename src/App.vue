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
<style lang="scss">
@import "./styles/styles.scss";
@import "./styles/custome_style.scss";
</style>
<style lang="scss">

</style>
