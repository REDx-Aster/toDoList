import addSvg from '../../../assets/img/add.svg';

import OptionFormContainer from '../../option/optionForm/optionContainer';

const Form = ({ toggleForm, visibleForm, inputValue, setInputValue, onAddTask }) => {
  return (
    <div className="window__block window__block--form">
      {!visibleForm ? (
        <OptionFormContainer
          option={{ title: 'Добавить задачу', icon: addSvg }}
          toggleForm={toggleForm}
        />
      ) : (
        <>
          <input
            className="window__input field"
            value={inputValue}
            type="text"
            placeholder="Название списка"
            // onChange={(event) => console.log(event.target.value)}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={onAddTask} className="button button--active">
            Добавить задачу
          </button>
          <button onClick={toggleForm} className="button">
            Отмена
          </button>
        </>
      )}
    </div>
  );
};

export default Form;
