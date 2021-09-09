<template>
  <div>
    <main class="main">
      <AdminLogin />
    </main>
  </div>
</template>
<script>
import AdminLogin from "@/components/AdminLogin";
export default {
  name: 'app',
  components: {
    AdminLogin
  }
}
</script>