<template>
  <div>
    <Header />
    <main class="main">
      <Hero />
      <Awards />
      <Been />
      <Profit />
      <Partners />
      <customer />
    </main>
    <BgFooter />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Awards from '@/components/Awards'
import Been from '@/components/Been'
import Profit from '@/components/Profit'
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import CustomerSlider from "@/components/Swiper";
import Customer from "@/components/Customer";
import BgFooter from "@/components/BgFooter";
  export default {
    name: 'app',
    components: {
      BgFooter,
      Customer,
      CustomerSlider,
      Footer,
      Partners,
      Header,
      Hero,
      Awards,
      Been,
      Profit,
    }
  }
</script>