<template>
  <div>
    <main>
      <div class="container wrapper credentials">
        <p>Enter your credentials to sign in.</p>
        <input type="text" v-model="signIn.email" placeholder="E-mail" class="small"/>
<!--                                <input type="text" v-model="signIn.email" placeholder="E-mail" class="small wrong"/>-->
<!--                                <p class="error">Wrong e-mail!</p>-->
        <input type="password" v-model="signIn.password" placeholder="Password" class="small"/>
        <button class="button green-button small-button" @click="login()">SIGN IN</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data(){
    return {
      signIn: {
        email: 'o.hlukhyi@gmail.com',
        password: 'a6vxd653'
      }
    }
  },
  methods:{
    login() {
      this.axios.post('http://renoshop.bee/api/auth/login', this.signIn)
        .then((response) => {
          let token = response.data.token_type + ' ' + response.data.token;
          localStorage.setItem('user-token', token);
          this.axios.defaults.headers.common['Authorization'] = token;
          this.$store.commit('setToken', {
            token: token
          });
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {}
}
</script>

<style lang="sass">
  .credentials
    flex-direction: column
    margin: 50px auto
    > *
      &:not(:last-child)
        margin-bottom: 25px
</style>