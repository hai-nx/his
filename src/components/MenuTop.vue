<template>
    <div class="menu-top">
      <div class="container">
        <div class="logo">
          <a href="#"><img src="../images/logo.png"/></a>
        </div>
        <div class="top-nav">
          <div class="top-nav-left">
            <span class="menu"> </span>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#works" class="scroll">INTRODUCTION</a></li>
              <li><a href="#Solution" class="scroll">SOLUTION</a></li>
              <li><a href="#Project" class="scroll">PROJECT</a></li>
              <li><a href="TaiLieu.html" class="_blank">TÀI LIỆU</a></li>
            </ul>
          </div>
          <!---- script-nav ---->
          <!-- <script>
            $("span.menu").click(function() {
              $(".top-nav-left ul").slideToggle(500, function() {});
            });
          </script>
          <script type="text/javascript">
            jQuery(document).ready(function($) {
              $(".scroll").click(function(event) {
                event.preventDefault();
                $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
              });
            });
          </script> -->
          <!---- script-nav ---->
          <div class="top-nav-right">
            <div id="loginContainer">
              <a href="ehc_price.html" target="_blank" id="loginButton2"><span>Bảng giá</span></a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "menu-top",
    methods: {},
    computed: {
    },
    mounted() {
    },
    data() {
      return {};
    },
  };
  </script>
  
  <style lang="scss"></style>
  