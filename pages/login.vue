<template>
  <FormulateForm :values="form" @submit="login">
    <FormulateInput name="username" type="text"/>
    <FormulateInput name="password" type="password"/>
    <button class="btn btn-primary" type="submit">Submit</button>
  </FormulateForm>
</template>

<script>
export default {
  name: 'Login',
  auth: false,
  data() {
    return {
      form: {
        username: 'admin',
        password: 'admin-password'
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.login({ data: this.form })
      } catch(e) {
        console.error(e.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
