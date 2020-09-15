<template>
  <main id="main">
    <section id="dashboard">
      <ul class="dashboard flex flex-wrap">
        <index-card v-for="item in $t('pages')" :key="item.slug" :data="item"/>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style></style>
