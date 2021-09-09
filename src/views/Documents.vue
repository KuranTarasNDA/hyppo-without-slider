<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Documents />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Documents from "@/components/Documents";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Documents,
    Footer,
  }
}
</script>