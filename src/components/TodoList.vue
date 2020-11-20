<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, idx) in todos"
        v-bind:index="idx"
        v-bind:key="todo"
        v-bind:todo="todo"
        @remove-todo="removeTodo"
        @complete-todo="completeTodo"
        @edit-todo="editSubmit"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
    completeTodo(id) {
      this.$emit("complete-todo", id);
    },
    editSubmit(id, title) {
      this.$emit("edit-todo", id, title);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>