import classNames from 'classnames';

import closeSvg from '../../../../assets/img/close.svg';

const Popup = ({
  colors,
  visiblePopup,
  inputValue,
  selectColor,
  onAddList,
  setSelectColor,
  setInputValue,
  onClose,
}) => {
  return (
    <>
      {/* popup */}
      {visiblePopup && (
        <div className="popup">
          <img onClick={onClose} src={closeSvg} alt="close" className="popup__close-btn"></img>
          <input
            className="field"
            value={inputValue}
            type="text"
            placeholder="Название списка"
            // onChange={(event) => console.log(event.target.value)}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <ul className="popup__colors-list">
            {colors.map((color) => {
              return (
                <li
                  onClick={() => {
                    setSelectColor(color.id);
                  }}
                  key={color.id}
                  // className="popup__colors-item"
                  className={classNames('popup__colors-item', {
                    active: selectColor === color.id,
                  })}
                  style={{ backgroundColor: color.hex }}></li>
              );
            })}
          </ul>

          <button onClick={onAddList} className="button button--active">
            Добавить
          </button>
        </div>
      )}
    </>
  );
};

export default Popup;
