<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        @click="$emit('complete-todo', todo.id)"
        v-bind:checked="todo.completed"
      />
      <strong class="index">{{ index + 1 }}</strong>
      <form v-if="isEdit" @submit.prevent="onEditSubmit" class="editForm">
        <InputText type="text" v-model="editText" />
        <Button
          type="submit"
          icon="pi pi-check"
          class="p-button-rounded p-button-outlined p-button-success p-button-sm"
          v-bind:disabled="!editText.length"
        />
      </form>
      <span v-else>{{ upperTitle }}</span>
    </span>
    <div>
      <Button
        icon="pi pi-pencil"
        class="p-button-rounded p-button-success p-button-sm"
        v-bind:class="{ 'p-button-text': !isEdit }"
        @click="onEditClick"
      />
      <Button
        icon="pi pi-times"
        class="p-button-rounded p-button-danger p-button-text p-button-sm"
        @click="onRemoveTodo"
      />
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      editText: this.todo.title,
    };
  },
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
  methods: {
    onRemoveTodo() {
      this.$emit("remove-todo", this.todo.id);
    },
    onEditClick() {
      this.isEdit = !this.isEdit;
    },
    onEditSubmit() {
      this.$emit("edit-todo", this.todo.id, this.editText);
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
.editForm {
  display: inline;
}
.done {
  text-decoration: line-through;
}
.index {
  margin-right: 10px;
}
</style>