<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <ApDocuments />
      <Nav />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Nav from "@/components/Nav";
import ApDocuments from "@/components/ApDocuments";
export default {
  name: 'app',
  components: {
    ApDocuments,
    Nav,
    ApHeader

  }
}
</script>