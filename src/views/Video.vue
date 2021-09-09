<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Video />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Video,
    Footer,
  }
}
</script>