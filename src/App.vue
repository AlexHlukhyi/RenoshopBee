<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
  export default {
    created: function () {
      this.axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.status === 401) {
            console.log('Token is out of date!');
            this.$store.commit('logout');
            localStorage.removeItem('user-token');
            this.$router.push('/login');
          }
          throw err;
        });
      });
    }
  }
</script>