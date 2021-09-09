<template>
  <div>
    <HeaderLog />
    <main class="main">
      <VideoTwo />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import VideoTwo from "@/components/VideoTwo";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    VideoTwo,
    Footer,
  }
}
</script>