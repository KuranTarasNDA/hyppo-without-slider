<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Details />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Details from "@/components/Details";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Details,
    Footer,
  }
}
</script>