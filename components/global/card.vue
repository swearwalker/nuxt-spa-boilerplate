<template>
  <li class="card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <n-link :class="[ 'bg-' + data.color + '-gradient' ]" class="card__container flex w-full rounded-lg p-4 text-white"
            :to="localePath({ name: data.slug })">
      <svg-icon class="card__icon fill-current w-8 h-8 mr-4" :name="data.icon"/>
      <div class="card__content flex flex-col">
        <h2 class="card__title uppercase font-medium mb-4">{{ data.title }}</h2>
        <p class="card__description text-sm opacity-75">{{ data.description }}</p>
      </div>
    </n-link>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
