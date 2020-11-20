<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        @click="$emit('complete-todo', todo.id)"
        v-bind:checked="todo.completed"
      />
      <strong>{{ index + 1 }}</strong>
      {{ upperTitle }}
    </span>
    <Button
      icon="pi pi-times"
      class="p-button-rounded p-button-danger p-button-text p-button-sm"
      @click="$emit('remove-todo', todo.id)"
    />
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  computed: {
    upperTitle() {
      const title = this.todo.title;
      return title.slice(0, 1).toUpperCase() + title.slice(1);
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  align-items: center;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>