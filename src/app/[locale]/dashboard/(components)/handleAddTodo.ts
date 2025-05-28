import { addTodo } from "@/actions/todo-actions";

export async function handleAddTodo(title: string, description: string) {
  // Call the server action to add a todo
  await addTodo(title, description, 'open');
}
