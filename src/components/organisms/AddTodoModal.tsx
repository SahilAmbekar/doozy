import React from "react";
import { CardWithoutContainer } from "@/components/molecules/card";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

interface AddTodoModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

export default function AddTodoModal({ open, onClose, onSubmit }: AddTodoModalProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <CardWithoutContainer className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Todo</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          <div className="mb-4">
            <Input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" onClick={onClose} className="bg-gray-200 text-gray-700">Cancel</Button>
            <Button type="submit" className="bg-blue-600 text-white">Add</Button>
          </div>
        </form>
      </CardWithoutContainer>
    </div>
  );
}
