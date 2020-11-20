<template>
  <form @submit.prevent="onSubmit">
    <div class="p-inputgroup">
      <InputText placeholder="Let start to add new todo!" v-model="title" />
      <Button label="Create" class="p-button-success" @click="onSubmit" />
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: uuidv4(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex: 1;
  margin-right: 10px;
}
</style>