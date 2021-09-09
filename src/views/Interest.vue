<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Interest />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Interest from "@/components/Interest";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Interest,
    Footer,
  }
}
</script>