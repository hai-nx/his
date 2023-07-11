<template>
  <div class="container">
    <div id="works" class="content-work">
      <div class="content-top">
        <img class="ball wow bounceIn animated " data-wow-delay="0.4s" src="../images/ball.png" />
        <h2>We know how to digitalize<br />healthcare providers</h2>
        <p class="para">
          Many healthcare providers are stuck with archaic healthcare management software which are
          obsolete. Thus there are many outdated applications exist in their IT system (some app
          written by FoxPro 20 years ago and some mobile-app developed recently). We EHC can
          transform and bring every app to all-in-one/end-to-end system with the most updated
          technologies
        </p>
      </div>
      <div class="content-top-top wow bounceIn" data-wow-delay="0.4s">
        <div class="list">
          <ul class="tabs-menu">
            <li class="col-md-4 current aos-init fade-left aos-animate" @click="toggleTab(1)">
              <label class="circle">1</label>
              <h3 class="circle_desc">Fast</h3>
              <div class="clearfix"></div>
            </li>
            <li class="col-md-4 aos-init fade-left aos-animate" @click="toggleTab(2)">
              <label class="circle">2</label>
              <h3 class="circle_desc">Lean</h3>
              <div class="clearfix"></div>
            </li>
            <li class="col-md-4 aos-init fade-left aos-animate" @click="toggleTab(3)">
              <label class="circle">3</label>
              <h3 class="circle_desc">Affodable</h3>
              <div class="clearfix"></div>
            </li>
            <div class="clearfix"></div>
          </ul>
        </div>
      </div>

      <div class="tab">
        <div class="content-top-bottom" v-if="tabShow == 1">
          <div class="col-md-4 glasses">
            <img src="../images/glass.png" />
          </div>
          <div class=" col-md-8 top-img-para">
            <h4>Fast development</h4>
            <p>
              With thousands of medical software functions we have been developed for more than 50
              hospitals across Vietnam and oversea, EHC can develop new customized version in few
              weeks/months.
            </p>
          </div>
        </div>
        <div class="content-top-bottom" v-if="tabShow == 2">
          <div class="col-md-4 glasses">
            <img src="../images/glass.png" />
          </div>
          <div class=" col-md-8 top-img-para">
            <h4>Lean start</h4>
            <p>
              No need to wait until total software is finished, to go-live with it. We should
              go-live each modules ASAP
            </p>
          </div>
        </div>
        <div class="content-top-bottom" v-if="tabShow == 3">
          <div class="col-md-4 glasses">
            <img src="../images/glass.png" />
          </div>
          <div class=" col-md-8 top-img-para">
            <h4>Low initial cost</h4>
            <p>
              Hospitals only pay us until we go-live with the Beta version (the customized version,
              not perfect but can operate in hospital)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
  methods: {
    toggleTab(tab) {
      this.tabShow = tab;
    },
  },
  computed: {},
  mounted() {},
  data() {
    return {
      tabShow: 1,
    };
  },
};
</script>

<style lang="scss">
</style>
