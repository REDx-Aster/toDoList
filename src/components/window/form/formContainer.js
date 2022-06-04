import { useState } from 'react';

import Form from './';

const FormContainer = ({ lists, setLists, tasks, setTasks, activeItem }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleForm = () => {
    setVisibleForm(!visibleForm);
    setInputValue('');
  };
  const onAddTask = () => {
    if (!inputValue) {
      alert('Введите название задачи');
      return;
    }
    const newItem = {
      id: Math.random(Date.now),
      text: inputValue,
      completed: false,
      listId: activeItem.id,
    };

    toggleForm();

    const newTasks = tasks;
    newTasks.push(newItem);

    setTasks(newTasks);

    const newList = lists.map((item) => {
      item.tasks = tasks.filter((task) => item.id === task.listId);
      return item;
    });

    setLists(newList);
  };
  return (
    <Form
      toggleForm={toggleForm}
      visibleForm={visibleForm}
      onAddTask={onAddTask}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};

export default FormContainer;
