<template>
  <div class="page-report"></div>
</template>

<script>
//import Utils from "../Utils";
export default {
  name: "Report",
  components: {},
  methods: {},
  computed: {},
  mounted() {
  },
  data() {
    return {
      searchModel: {
        fromDate: Date.now(),
        toDate: Date.now(),
      },
      lstData:[],
    };
  },
};
</script>

<style lang="scss">
.page-report {
  padding: 5px;
  .title {
    font-weight: bold;
    margin: 10px 0px 10px -10px;
    color: #28a745;
    font-size: 22px;
    text-align: center;
  }

  .btn-Action {
    margin-top: 20px;
  }
}
</style>
