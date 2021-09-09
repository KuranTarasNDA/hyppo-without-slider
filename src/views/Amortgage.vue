<template>
  <div>
    <Header />
    <main class="main">
      <Amortgage />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Amortgage from "@/components/Amortgage";
export default {
  name: 'app',
  components: {
    Amortgage,
    Footer,
    Header
  }
}
</script>