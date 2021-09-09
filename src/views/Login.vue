<template>
  <div>
    <Header />
    <main class="main">
      <Login />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Register from "@/components/Register";
import Login from "@/components/Login";
export default {
  name: 'app',
  components: {
    Login,
    Register,
    Footer,
    Header
  }
}
</script>