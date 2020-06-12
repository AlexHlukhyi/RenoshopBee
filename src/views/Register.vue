<template>
  <div>
    <main>
      <div class="container wrapper credentials">
        <p>Enter your credentials to create a new account.</p>
        <input type="text" v-model="signUp.firstName" placeholder="First Name" class="small"/>
        <input type="text" v-model="signUp.lastName" placeholder="Last Name" class="small"/>
        <input type="text" v-model="signUp.phone" placeholder="Phone" class="small"/>
        <input type="text" v-model="signUp.email" placeholder="E-mail" class="small"/>
        <input type="password" v-model="signUp.password" placeholder="Password" class="small"/>
        <input type="password" v-model="signUp.repeatPassword" placeholder="Repeat password" class="small"/>
        <button class="button green-button small-button" @click="register()">SIGN UP</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Register',
  components: {},
  data(){
    return {
      signUp: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  methods:{
    register() {
      if (this.signUp.password === this.signUp.repeatPassword) {
        this.axios.post('http://renoshop.bee/api/auth/register', {
          name: this.signUp.firstName + ' ' + this.signUp.lastName,
          email: this.signUp.email,
          password: this.signUp.password,
          phone: this.signUp.phone
        }).then(() => {
          this.$router.push('/login')
        }).catch((error) => {
          console.log(error);
        });
      }
    }
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