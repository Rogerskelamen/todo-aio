<script>
export default {
  props: [
    'hasDone',
    'text',
  ],
  data() {
    return {
    }
  },
}
</script>

<template>
  <li class="item" :class="{ 'done-item': hasDone }">
    <span class="text">{{ text }}</span>
    <input v-if="!hasDone" @click="$emit('doneCheck')" type="checkbox" />
  </li>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2rem;
}

.item > .text {
  transition: all .3s ease-in-out;
}

.done-item > .text {
  text-decoration: line-through;
}
</style>
