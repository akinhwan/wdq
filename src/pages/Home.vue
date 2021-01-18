<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroHome />
      <Stats />
      <Carousel />
      <Tabs />
      <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import HeroHome from './../partials/HeroHome.vue'
import Stats from './../partials/Stats'
import Carousel from './../partials/Carousel'
import Tabs from './../partials/Tabs'
import Process from './../partials/Process'
import PricingTables from './../partials/PricingTables'
import TestimonialsBlocks from './../partials/TestimonialsBlocks'
import FeaturesBlocks from './../partials/FeaturesBlocks'
import Cta from './../partials/Cta'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    PageIllustration,
    HeroHome,
    Stats,
    Carousel,
    Tabs,
    Process,
    PricingTables,
    TestimonialsBlocks,
    FeaturesBlocks,
    Cta,
    Footer,
  },
}
</script>