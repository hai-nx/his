<template>
  <div>
    <b-carousel
      id="carousel"
      :interval="2000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="margin-top: 106px;"
    >
      <!-- <b-carousel-slide :caption="c.caption" :text="c.text" v-for="c in Sliders" :key="c.id">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="c.urlImage"
            :alt="c.altImage"
          />
        </template>
      </b-carousel-slide>   -->
      <b-carousel-slide caption="International standard" text="fast, lean, affodable">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../images/banner1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Advance technologies"
        text="AI, BI, cloud, mobile, decision support..."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../images/banner2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="International standard"
        text="HL7, DICOM, SnomedCT, Nanda, ICD10.."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../images/banner3.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "SliderTop",
  methods: {},
  computed: {},
  mounted() {},
  data() {
    return {
      Sliders: [
        {
          id: 0,
          caption: "International standard",
          text: "fast, lean, affodable",
          urlImage: "../images/banner2.jpg",
          altImage: "image slot",
        },
        {
          id: 1,
          caption: "International standard",
          text: "AI, BI, cloud, mobile, decision support...",
          urlImage: "../images/banner2.jpg",
          altImage: "image slot",
        },
        {
          id: 2,
          caption: "International standard",
          text: "HL7, DICOM, SnomedCT, Nanda, ICD10..",
          urlImage: "../images/banner3.jpg",
          altImage: "image slot",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
