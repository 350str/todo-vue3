<template>
  <div>
    <router-link to="/about">About</router-link>
    <div class="input-container">
      <AddTodo @add-todo="addTodo" />
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
      </select>
    </div>
    <TodoList
      v-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
      @complete-todo="completeTodo"
    />
    <p v-else>No todos here. Do you want to add one?</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      filter: "all",
    };
  },
  components: {
    TodoList,
    AddTodo,
  },
  mounted() {
    const storageState = JSON.parse(localStorage.getItem("todos"));
    console.log(storageState);
    if (storageState) {
      this.todos = storageState;
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === "completed") {
        return this.todos.filter((i) => i.completed);
      } else if (this.filter === "not-completed") {
        return this.todos.filter((i) => !i.completed);
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    save() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.save();
    },
    addTodo(todo) {
      this.todos.push(todo);
      this.save();
    },
    completeTodo(id) {
      this.todos = this.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      this.save();
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: center;
}
</style>