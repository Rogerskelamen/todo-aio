<script>
import NeumorphCard from './components/NeumorphCard.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    NeumorphCard,
    TodoItem,
  },
  data() {
    return {
      isAddCardVisible: true,
    }
  },
}
</script>

<template>
  <header>
    <h3 class="title">Todo Vue</h3>
    <div class="container">
      <NeumorphCard
        id="add"
        v-show="isAddCardVisible"
        title="please enter"
        :btn="false"
      >
        <form class="add-form">
          <input class="add-ipt" type="text" name="todo" autofocus>
          <button class="submit-btn" type="submit">submit</button>
        </form>
      </NeumorphCard>

      <NeumorphCard
        title="to be done"
        :btn="true"
      >
        <TodoItem
          v-for="i in 3" :key="i"
          :has-done="false"
        />
      </NeumorphCard>
      <NeumorphCard
        id="done"
        title="already done"
        :btn="false"
      >
        <TodoItem
          v-for="i in 3" :key="i"
          :has-done="true"
        />
      </NeumorphCard>
    </div>
  </header>
</template>

<style scoped>
header {
  padding-top: 1.5rem;
}

header > .title {
  font-size: 2.25rem;
  text-align: center;
}

.container {
  margin: 0 auto;
  margin-top: 3rem;
  width: 25rem;
}

#done {
  margin-top: 4.25rem;
}

/* Add area style */
#add {
  margin-bottom: 4.25rem;
  transition: all .3s ease-in-out;
  opacity: 1;
}

.add-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0 0.5rem;
}

.add-form .add-ipt {
  background-color: var(--va-bg-light-color);
  border: none;
  font-size: 1.125rem;
  width: 15rem;
}

.add-form .submit-btn {
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  color: var(--va-dark-text-color);
  border-radius: 5px;
  background: #e0e0e0;
  box-shadow:  3px 3px 7px #bebebe,
               -3px -3px 7px #ffffff;
}
</style>
