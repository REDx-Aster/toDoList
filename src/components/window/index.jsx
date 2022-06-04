import './window.scss';

import editSvg from '../../assets/img/edit.svg';
import removeSvg from '../../assets/img/remove.svg';

import Form from './form/formContainer';

const Window = ({
  lists,
  setLists,
  tasks,
  setTasks,
  activeItem,
  onEditTitle,
  onEditTask,
  onDeletTask,
}) => {
  return (
    activeItem && (
      <div className="window__body" key={activeItem.id}>
        {/* title */}
        <h2 className="window__block window__block--title" style={{ color: activeItem.color }}>
          {activeItem.name}
          <img onClick={onEditTitle} className="window__image" src={editSvg} alt="Edit" />
        </h2>
        {/* window__list */}
        <div className="window__block window__block--list">
          {/* {console.log(activeItem)} */}
          {!activeItem.tasks.length && <h2 className="window__warning">Задачи отсутствуют</h2>}
          {activeItem.tasks &&
            activeItem.tasks.map((task) => {
              return (
                <div key={task.id} className="window__item checkbox">
                  <input
                    // onChange={onCheked}
                    className="checkbox__input"
                    id={`task-${task.id}`}
                    type="checkbox"
                    defaultChecked={task.completed ? 'checked' : ''}
                  />
                  <label className="checkbox__label" htmlFor={`task-${task.id}`}></label>
                  <p className="window__text">{task.text}</p>

                  <img
                    onClick={() => {
                      onEditTask(task);
                    }}
                    className="window__icon"
                    src={editSvg}
                    alt=""
                  />
                  <img
                    onClick={() => {
                      onDeletTask(task);
                    }}
                    className="window__icon"
                    src={removeSvg}
                    alt=""
                  />
                </div>
              );
            })}
        </div>

        {/* window__form */}
        <Form
          lists={lists}
          setLists={setLists}
          tasks={tasks}
          setTasks={setTasks}
          activeItem={activeItem}
        />
      </div>
    )
  );
};

export default Window;
