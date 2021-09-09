<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <ApMortgagePage />
      <Decline />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Decline from "@/components/Decline";
import ApMortgagePage from "@/components/ApMortgagePage";
export default {
  name: 'app',
  components: {
    ApMortgagePage,
    Decline,
    ApHeader

  }
}
</script>