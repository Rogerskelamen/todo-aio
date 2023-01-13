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
      todoList: [],
      doneList: [],
      isAddCardVisible: false,
      newTodo: '',
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    // get todos and dones using fetch
    getData() {
      fetch(`http://localhost:3030`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(result => this.todoList = result)

      fetch(`http://localhost:3030/done`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(result => this.doneList = result)
    },

    // display add card
    addCardDisplay() {
      this.isAddCardVisible = true
    },

    // submit new todo
    async submitTodo() {
      const result = await fetch(`http://localhost:3030/add?name=${this.newTodo}`, {
        method: 'POST'
      })
        .then(response => response.json())
      if (result.code !== 200) {
        console.log(result.message)
        return
      }
      this.getData()
      this.isAddCardVisible = false
      this.newTodo = ''
    },

    // delete a todo
    async deleteTodo(id) {
      const result = await fetch(
        `http://localhost:3030/delete/${id}`,
        { method: 'POST' }
      )
        .then(response => response.json())
      if (result.code !== 200) {
        console.log(result.message)
        return
      }
      this.getData()
    }
  }
}
</script>

<template>
  <header>
    <h3 class="title">Todo Vue</h3>
    <div class="container">
      <Transition name="fade">
        <NeumorphCard
          id="add"
          v-show="isAddCardVisible"
          title="please enter"
          :btn="false"
        >
          <form class="add-form">
            <input class="add-ipt" v-model="newTodo" type="text" name="todo" autofocus>
            <button class="submit-btn" type="submit" @click.prevent="submitTodo">submit</button>
          </form>
        </NeumorphCard>
      </Transition>

      <NeumorphCard
        title="to be done"
        @click-add-btn="addCardDisplay"
        :btn="true"
      >
        <TransitionGroup name="list">
          <TodoItem
            v-for="item in todoList" :key="item.id"
            :text="item.name"
            @done-check="deleteTodo(item.id)"
            :has-done="false"
          />
        </TransitionGroup>
      </NeumorphCard>
      <NeumorphCard
        id="done"
        title="already done"
        :btn="false"
      >
        <TransitionGroup name="list">
          <TodoItem
            v-for="item in doneList" :key="item.id"
            :text="item.name"
            :has-done="true"
          />
        </TransitionGroup>
      </NeumorphCard>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: box-shadow 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
   box-shadow: none;
}

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
