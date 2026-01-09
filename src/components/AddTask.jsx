import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    if (!title || !description) {
     toast.error("Title and Description are required!");
      return;
    }

    const taskData = { title, description };

    try {
      await onTaskAdded(taskData); 
      toast.success("Task Created Successfully");

      setTitle("");
      setDescription("");

    } catch (error) {
      console.error(error);
      toast.error("Issue in Task Creation ");
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='flex flex-col'>
          <label htmlFor='title'>Enter Task Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='description'>Enter Task Description</label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <button
            type="submit"
            className=" text-black cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mt-3"
          >
           Submit
        </button>

      </form>
    </div>
  );
};

export default AddTask;
