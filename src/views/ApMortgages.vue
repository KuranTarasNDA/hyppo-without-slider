<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <Filters />
      <ApMortgages />
      <Nav />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import ApMortgages from "@/components/ApMortgages";
import Nav from "@/components/Nav";
import Filters from "@/components/Filters";
export default {
  name: 'app',
  components: {
    Filters,
    Nav,
    ApMortgages,
    ApHeader

  }
}
</script>