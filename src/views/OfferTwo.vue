w<template>
  <div>
    <HeaderLog />
    <main class="main">
    </main>
    <OfferTwo />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import OfferTwo from "@/components/OfferTwo";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    OfferTwo,
    Footer,
  }
}
</script>