<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <Personal />
      <UserDocuments />
      <UserMortgages />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Personal from "@/components/Personal";
import UserDocuments from "@/components/UserDocuments";
import UserMortgages from "@/components/UserMortgages";
export default {
  name: 'app',
  components: {
    UserMortgages,
    UserDocuments,
    Personal,
    ApHeader
  },

}
</script>