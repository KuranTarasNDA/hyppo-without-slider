<template>
  <div>
    <HeaderLog />
    <main class="main">
      <Review />
      <Fixed />
      <Indentity />
      <Confirm />
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import Fixed from "@/components/Fixed";
import Indentity from "@/components/Identity";
import Confirm from "@/components/Confirm";
import HeaderLog from "@/components/HeaderLog";
export default {
  name: 'app',
  components: {
    HeaderLog,
    Confirm,
    Indentity,
    Fixed,
    Review,
    Footer,
  }
}
</script>