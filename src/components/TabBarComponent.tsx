// TabBarComponent.tsx
import AllTodoTasksComponent from "./AllTodoTasksComponent";

export default function TabBarComponent() {
  return (
    <div className="w-[1200px] mx-auto">
      <div>
        <h3 className="font-bold text-lg mb-4">Todo Tasks</h3>
      </div>
      <div className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="All Tasks"
          defaultChecked
        />
        <div className="tab-content border-top p-6">
          <AllTodoTasksComponent filter="all" />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Completed"
        />
        <div className="tab-content border-top p-6">
          <AllTodoTasksComponent filter="completed" />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Uncompleted"
        />
        <div className="tab-content border-top p-6">
          <AllTodoTasksComponent filter="uncompleted" />
        </div>
      </div>
    </div>
  );
}
