<template>
  <li class="card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 relative">
    <n-link :class="[ 'bg-' + data.color + '-gradient' ]" class="card__container flex w-full rounded-lg p-4 text-white h-full"
            :to="localePath({ name: data.slug })">
      <svg-icon class="card__icon fill-current w-6 h-6 mr-4" :name="data.icon"/>
      <div class="card__content flex flex-col flex-1">
        <h2 class="card__title uppercase font-medium mb-4">{{ data.title }}</h2>
        <p class="card__description text-sm opacity-75">{{ data.description }}</p>
      </div>
      <span :class="[ 'text-' + data.color ]" class="card__quantity w-8 h-8 absolute rounded shadow bg-white flex items-center justify-center font-bold">
        3
      </span>
    </n-link>
  </li>
</template>

<script>
export default {
  name: 'IndexCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__quantity {
    top: -.5rem;
    right: -.5rem;
  }
}
</style>
