<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <ApPanelSearch />
      <ApPanel />
      <Nav />
    </main>
    <Edit />
    <Create />
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Nav from "@/components/Nav";
import ApPanel from "@/components/ApPanel";
import ApPanelSearch from "@/components/ApPanelSearch";
import Edit from "@/components/Edit";
import Create from "@/components/Create";
export default {
  name: 'app',
  components: {
    Create,
    Edit,
    ApPanelSearch,
    ApPanel,
    Nav,
    ApHeader
  },

}
</script>