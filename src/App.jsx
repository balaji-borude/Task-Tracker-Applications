import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import GetAlltask from "./components/GetAllTask.jsx";
import { addTask, FetchAllTask } from "./api/TaskServices.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // get all task
  useEffect(() => {
    async function getTasks() {
      const data = await FetchAllTask();
      setTasks(data || []);
    }
    getTasks();
  }, []);

  // task creation 
  const handleAddTask = async (taskData) => {
    try {
      const newTask = await addTask(taskData);
      console.log("Recently Updated Task:", newTask);
      const updatedTasks = await FetchAllTask();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="w-11/12 max-w-1/2 mx-auto m-6">
      <AddTask onTaskAdded={handleAddTask}/>
      <GetAlltask tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default App;
