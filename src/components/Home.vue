<template>
  <div class="page-trang-chu">
    123
  </div>
</template>

<script>
//import Utils from "../Utils";
export default {
  name: "Home",
  components: {
    
  },
  methods: {
    submitForm(){}
  },
  computed: {},
  mounted() {
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss">
.modal-content{
    width: 335px;
    height: 360px;
  }
.page-trang-chu {
  padding: 5px;
  .title {
    font-weight: bold;
    margin: 10px 0px 10px -10px;
    color: #28a745;
    font-size: 22px;
    text-align: center;
  }
  .errr {
    color: red;
    font-style: italic;
    font-size: 13px;
  }
  .note {
    color: red;
    text-align: justify;
    text-align: center;
    margin-bottom: 15px;
  }
  .item {
  }
  .req {
    &::after {
      content: "*";
      color: red;
    }
  }
  .bg_lead {
    background: #ecf8ee;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 10px;
  }
  .box-tiepxuc {
    border: 1px solid #5bb166;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
  }
  .div-continue {
    text-align: center;
    margin: 20px 0px;
  }
  .btnSubmit{
    width: 100%;
  }
  
}
</style>
