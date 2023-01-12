<template>
  <v-app>
    <Navigation />
    <Bar />
    <Carousel />
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/template/Navigation.vue";
import Bar from "@/components/template/Bar.vue";
import Carousel from "@/components/widgets/Carousel.vue";
import Footer from "@/components/template/Footer.vue";

export default {
  components: {
    Navigation: Navigation,
    Bar,
    Carousel,
    Footer,
  }
};
</script>
