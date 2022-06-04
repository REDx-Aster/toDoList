import Window from '.';
const WindowContainer = ({ lists, setLists, tasks, setTasks, activeItem }) => {
  const onEditTitle = () => {
    const newTitle = window.prompt('Название списка', activeItem.name);
    if (newTitle) {
      const newLists = lists.map((item) => {
        if (item.id === activeItem.id) {
          item.name = newTitle;
        }
        return item;
      });
      setLists(newLists);
    }
  };

  const onEditTask = (newtask) => {
    const newText = window.prompt('Название задачи', newtask.text);
    if (newText) {
      const newLists = lists.map((item) => {
        item.tasks.map((task) => {
          console.log(task);
          if (task.id === newtask.id) {
            task.text = newText;
            console.log(task);
          }
          return task;
        });
        return item;
      });

      setLists(newLists);
    }
  };
  const onDeletTask = (removableTask) => {
    const newTasks = tasks;
    const index = tasks.indexOf(removableTask);

    newTasks.splice(index, 1);

    setTasks(newTasks);

    const newList = lists.map((item) => {
      item.tasks = tasks.filter((task) => item.id === task.listId);
      return item;
    });

    setLists(newList);
  };

  return (
    <Window
      lists={lists}
      setLists={setLists}
      tasks={tasks}
      setTasks={setTasks}
      activeItem={activeItem}
      onEditTitle={onEditTitle}
      onEditTask={onEditTask}
      onDeletTask={onDeletTask}
    />
  );
};

export default WindowContainer;
