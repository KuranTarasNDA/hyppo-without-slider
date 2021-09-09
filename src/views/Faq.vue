<template>
  <div>
    <Header />
    <main class="main">
      <Faq />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
export default {
  name: 'app',
  components: {
    Faq,
    Footer,
    Header
  }
}
</script>