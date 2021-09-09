<template>
  <div>
    <ApHeader />
    <main class="main main_ap">
      <Search />
      <Users />
      <Nav />
    </main>
  </div>
</template>
<script>
import ApHeader from "@/components/ApHeader";
import Search from "@/components/Search";
import Users from "@/components/Users";
import Nav from "@/components/Nav";
export default {
  name: 'app',
  components: {
    Nav,
    Users,
    Search,
    ApHeader

  }
}
</script>