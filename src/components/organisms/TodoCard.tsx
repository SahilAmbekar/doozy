import React from "react";
import { CardWithoutContainer } from "@/components/molecules/card";

interface TodoCardProps {
  title: string;
  description: string;
  status: 'open' | 'inProgress' | 'closed';
  onEdit?: () => void;
  onDelete?: () => void;
}

const statusStyles = {
  open: {
    label: 'Open',
    className: 'bg-blue-100 text-blue-700',
    titleClass: '',
  },
  inProgress: {
    label: 'In-Progress',
    className: 'bg-yellow-100 text-yellow-700',
    titleClass: '',
  },
  closed: {
    label: 'Closed',
    className: 'bg-green-100 text-green-700',
    titleClass: 'line-through',
  },
};

export default function TodoCard({ title, description, status, onEdit, onDelete }: TodoCardProps) {
  const statusInfo = statusStyles[status];
  return (
    <CardWithoutContainer>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <span className={`font-semibold text-lg ${statusInfo.titleClass}`}>{title}</span>
            <span className={`ml-2 px-2 py-0.5 rounded text-xs ${statusInfo.className}`}>{statusInfo.label}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Edit" onClick={onEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" /></svg>
            </button>
            <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Delete" onClick={onDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        <div className="text-gray-600 text-sm mt-1">
          {description}
        </div>
      </div>
    </CardWithoutContainer>
  );
}
