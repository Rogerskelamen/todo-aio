<script>
export default {
  props: [
    'btn',
    'title'
  ],
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <div class="neumorph">
    <button v-if="btn" class="add-btn">+</button>
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="todo-list">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.neumorph {
  padding: 0.75rem 2.25rem;
  position: relative;
  border-radius: 15px;
  background: #e0e0e0;
  box-shadow:  25px 25px 50px #bebebe,
               -25px -25px 50px #ffffff;
}

.neumorph > .title {
  display: inline-block;
  padding: 0 0.5rem;
  background-color: var(--va-text-dark-color);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--va-bg-light-color);
  border-radius: 5px;
}

.add-btn {
  font-weight: 700;
  color: var(--va-dark-text-color);
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 0;
  margin-top: -1.5rem;
  text-align: center;
  border-radius: 999px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  3px 3px 5px #bebebe,
               -3px -3px 5px #ffffff;
}

.add-btn:hover {
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
}

.todo-list {
  padding: 0.5rem 0.5rem 0 0.5rem;
  font-size: 1.25rem;
}
</style>
