'use client';
import { TodoCard } from "@/components/molecules/card";
import PanelVertical from "@/components/molecules/panel-vertical";

export default function TodoBoard() {

  return (
    <div className="flex items-center gap-4 justify-center h-[76dvh] bg-gray-100 p-4">
      <PanelVertical>
        <h1 className="text-2xl font-bold mb-4 text-center">Open</h1>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg">Sample Todo Title</span>
                  <span className="ml-2 px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700">Open</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" /></svg>
                  </button>
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              <div className="text-gray-600 text-sm mt-1">
                This is a sample description for the todo item. It can be a bit longer to show how the TodoCard adapts.
              </div>
            </div>
          </TodoCard>
        </div>
      </PanelVertical>
      <PanelVertical>
        <h1 className="text-2xl font-bold mb-4 text-center">In-Progress</h1>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg">Implement Drag & Drop</span>
                  <span className="ml-2 px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-700">In-Progress</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" /></svg>
                  </button>
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              <div className="text-gray-600 text-sm mt-1">
                Add drag and drop functionality to move todos between columns.
              </div>
            </div>
          </TodoCard>
        </div>
      </PanelVertical>
      <PanelVertical>
        <h1 className="text-2xl font-bold mb-4 text-center">Closed</h1>
        <div className="bg-white shadow-md rounded-lg w-full max-w-md">
          <TodoCard>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg line-through">Setup Database</span>
                  <span className="ml-2 px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">Closed</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" /></svg>
                  </button>
                  <button className="p-1 hover:bg-gray-200 cursor-pointer rounded" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              <div className="text-gray-600 text-sm mt-1">
                Database and tables are set up and ready to use.
              </div>
            </div>
          </TodoCard>
        </div>
      </PanelVertical>
    </div>
  );
}