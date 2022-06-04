import { useState } from 'react';

import {
  ListContainer,
  OptionPopupContainer,
  OptionListContainer,
  WindowContainer,
} from './components';

import dataBase from './assets/db.json';

import listSvg from './assets/img/list.svg';
import addSvg from './assets/img/add.svg';

import './App.scss';

function App() {
  const colors = dataBase.colors;

  const [lists, setLists] = useState(dataBase.lists);
  const [activeItem, setActiveItem] = useState(lists[0]);
  const [tasks, setTasks] = useState(dataBase.tasks);

  // before
  // {id: 1, name: 'Front-end', colorId: 5}
  dataBase.lists.map((item) => {
    item.color = dataBase.colors.filter((color) => item.colorId === color.id)[0].hex;
    return item;
  });
  // before && after
  // {id: 1, name: 'Front-end', colorId: 5, color: '#B6E6BD'}
  dataBase.lists.map((item) => {
    item.tasks = dataBase.tasks.filter((task) => item.id === task.listId);
    return item;
  });
  // after
  // {id: 1, name: 'Front-end', colorId: 5, color: '#B6E6BD', tasks: Array(3)}
  return (
    <div className="wrapper">
      <section className="todo">
        <div className="todo__sidebar sidebar">
          <OptionListContainer option={{ title: 'Все списки', icon: listSvg }} />
          <ListContainer
            lists={lists}
            setLists={setLists}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
          <OptionPopupContainer
            option={{ title: 'Создать список', icon: addSvg }}
            colors={colors}
            lists={lists}
            setLists={setLists}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="todo__window window">
          <WindowContainer
            lists={lists}
            setLists={setLists}
            tasks={tasks}
            setTasks={setTasks}
            activeItem={activeItem}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
