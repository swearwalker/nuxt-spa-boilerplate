<template>
  <div class="container">
    <div class="wrap flex m-10">
      <formulateInput name="test" label="label" placeholder="placeholder" type="text" help="help" error="error"/>
    </div>
    <v-select :options="['Canada', 'United States']"></v-select>
    <button class="mb-12 btn btn-primary">
      admin
    </button>
    <button class="mb-12 btn btn-secondary">
      admin
    </button>
    <button class="mb-12 btn btn-success">
      admin
    </button>
    <button class="mb-12 btn btn-info">
      admin
    </button>
    <button class="mb-12 btn btn-danger">
      admin
    </button>
    <button class="mb-12 btn btn-warning">
      admin
    </button>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style></style>
