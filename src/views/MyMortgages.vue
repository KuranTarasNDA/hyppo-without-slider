<template>
  <div>
    <HeaderLog />
    <main class="main">
      <my-mortgages />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import MyMortgages from "@/components/MyMortgages";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    MyMortgages,
    Footer,
  }
}
</script>