import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm";


export const getTodos = async () => {
    const todos = await db.select().from(todo);
    return todos;
}

export const addTodo = async (title: string, description: string, status: string) => {
    const newTodo = {
        title,
        description,
        status: 'open',
    };
    await db.insert(todo).values(newTodo);
}
export const updateTodo = async (id: string, updates: Partial<{ title: string; description: string; status: string }>) => {
    const modifyTodo = await db.update(todo).set(updates).where(eq(todo.id, id));
    return modifyTodo;
}   