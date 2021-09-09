<template>
  <div>
    <Header />
    <main class="main">
      <Mortgage />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Mortgage from "@/components/Mortgage";
export default {
  name: 'app',
  components: {
    Mortgage,
    Footer,
    Header
  }
}
</script>