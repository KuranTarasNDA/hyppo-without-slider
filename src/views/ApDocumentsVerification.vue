<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <ApInput />
      <Decline />
    </main>
    <DeclinePopup />
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import ApInput from "@/components/ApInput";
import Decline from "@/components/Decline";
import DeclinePopup from "@/components/DeclinePopup";
export default {
  name: 'app',
  components: {
    DeclinePopup,
    Decline,
    ApInput,
    ApHeader
  },

}
</script>