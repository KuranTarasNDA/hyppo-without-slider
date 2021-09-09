<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Signed />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Signed from "@/components/Signed";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Signed,
    Footer,
  }
}
</script>