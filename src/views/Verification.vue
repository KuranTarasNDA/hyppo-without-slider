<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Verification />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Verification from "@/components/Verification";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Verification,
    Footer,
  }
}
</script>