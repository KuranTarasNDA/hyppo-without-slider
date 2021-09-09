<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <Preferences />
      <Model />
      <Full />
      <Score />
      <Contract />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Preferences from "@/components/Preferences";
import Model from "@/components/Model";
import Full from "@/components/Full";
import Contract from "@/components/Contract";
import Score from "@/components/Score";
export default {
  name: 'app',
  components: {
    Score,
    Contract,
    Full,
    Model,
    Preferences,
    ApHeader

  }
}
</script>