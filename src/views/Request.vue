<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Request />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Request from "@/components/Request";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Request,
    Footer,
  }
}
</script>