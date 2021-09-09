<template>
  <div>
    <Header />
    <main class="main">
      <Calculate />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Calculate from "@/components/Calculate";
export default {
  name: 'app',
  components: {
    Calculate,
    Footer,
    Header
  }
}
</script>