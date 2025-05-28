'use client';
import TodoCard from "@/components/organisms/TodoCard";
import { CardWithoutContainer } from "@/components/molecules/card";
import PanelVertical from "@/components/molecules/panel-vertical";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import AddTodoModal from "@/components/organisms/AddTodoModal";
import { handleAddTodo } from "./handleAddTodo";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export default async function TodoBoard() {
    const t = useTranslations('HomePage');
    const [modalOpen, setModalOpen] = useState(false);
    const todos = await db.select().from(todo);
    console.log('Todos:', todos);

  return (
    <div className="flex items-center gap-4 justify-center h-[76dvh] bg-gray-100 p-4">
      <PanelVertical>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-center">{t('open')}</h1>
          <button
            className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => setModalOpen(true)}
            aria-label="Add Todo"
          >
            +
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard
            title="Sample Todo Title"
            description="This is a sample description for the todo item. It can be a bit longer to show how the CardWithoutContainer adapts."
            status="open"
          />
        </div>
      </PanelVertical>
      <PanelVertical>
        <h1 className="text-2xl font-bold mb-4 text-center">{t('inProgress')}</h1>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard
            title="Implement Drag & Drop"
            description="Add drag and drop functionality to move todos between columns."
            status="inProgress"
          />
        </div>
      </PanelVertical>
      <PanelVertical>
        <h1 className="text-2xl font-bold mb-4 text-center">{t('closed')}</h1>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard
            title="Setup Database"
            description="Database and tables are set up and ready to use."
            status="closed"
          />
        </div>
      </PanelVertical>
      <AddTodoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={async (title, description) => {
          await handleAddTodo(title, description);
          setModalOpen(false);
          // Optionally, trigger a refresh or re-fetch todos here
        }}
      />
    </div>
  );
}