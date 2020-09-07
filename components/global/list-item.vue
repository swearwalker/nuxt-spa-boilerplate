<template>
  <li class="item flex items-center p-2 rounded shadow hover:shadow-lg">
    <h2 class="item__title font-medium flex-1 hover:text-primary cursor-pointer">{{ data.title }}</h2>
    <n-link :to="localePath(link)" class="item__edit btn btn-primary">
      <svg-icon class="item__icon fill-current text-white" name="edit"/>
    </n-link>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    link: {
      type: Object,
      required: true
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.item {
  @apply mb-4;
  &:last-child {
    @apply mb-0;
  }
}
</style>
