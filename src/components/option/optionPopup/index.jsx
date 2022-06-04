import Popup from './popup';

import '../option.scss';
const Option = ({
  option,
  colors,
  onClose,
  onAddList,
  visiblePopup,
  selectColor,
  setSelectColor,
  inputValue,
  setInputValue,
}) => {
  return (
    <ul className="option__list option__list--bottom">
      <li onClick={onClose} className="option__item">
        <i className="option__icon icon">
          <img className="icon__image" src={option.icon} alt="icon" />
        </i>
        {option.title}
      </li>
      <Popup
        colors={colors}
        onClose={onClose}
        onAddList={onAddList}
        visiblePopup={visiblePopup}
        inputValue={inputValue}
        selectColor={selectColor}
        setSelectColor={setSelectColor}
        setInputValue={setInputValue}
      />
    </ul>
  );
};

export default Option;
