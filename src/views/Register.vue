<template>
  <div>
    <Header />
    <main class="main">
      <Register />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Register from "@/components/Register";
export default {
  name: 'app',
  components: {
    Register,
    Footer,
    Header
  }
}
</script>