<template>
  <div>
    <Header />
    <main class="main">
      <About />
      <Team />
      <Word />
      <Val />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import Word from "@/components/word";
import Val from "@/components/val";
export default {
  name: 'app',
  components: {
    Val,
    Word,
    Team,
    About,
    Footer,
    Header
  }
}
</script>