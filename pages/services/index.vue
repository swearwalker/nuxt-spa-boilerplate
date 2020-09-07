<template>
  <main id="main">
    <ul class="list">
      <list-item v-for="item in $t('services')" :key="item.slug" :data="item"/>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
