<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <HeroAbout />
      <FeaturesGallery />
      <Timeline />
      <Career />
      <FeaturesAnimation />
      <Team />
      <CtaContact />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import HeroAbout from './../partials/HeroAbout'
import FeaturesGallery from './../partials/FeaturesGallery'
import Timeline from './../partials/Timeline'
import Career from './../partials/Career'
import FeaturesAnimation from './../partials/FeaturesAnimation'
import Team from './../partials/Team'
import CtaContact from './../partials/CtaContact'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    HeroAbout,
    FeaturesGallery,
    Timeline,
    Career,
    FeaturesAnimation,
    Team,
    CtaContact,
    Footer,
  },
};
</script>
