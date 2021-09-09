<template>
  <div>
    <HeaderLog />
    <main class="main">
    </main>
    <OfferOne />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import OfferOne from "@/components/OfferOne";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    OfferOne,
    Footer,
  }
}
</script>