import { useState } from 'react';

import Option from '.';

const OptionContainer = ({ option, colors, lists, setLists, setActiveItem }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectColor, setSelectColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => {
    setVisiblePopup(!visiblePopup);
    setSelectColor(colors[0].id);
    setInputValue('');
  };

  const onAddList = () => {
    if (!inputValue) {
      alert('Введите название списка');
      return;
    }
    const newItem = {
      id: Math.random(),
      name: inputValue,
      colorId: selectColor,
      color: colors.filter((color) => color.id === selectColor)[0].hex,
      tasks: [],
    };
    const newLists = [...lists, newItem];
    setLists(newLists);
    setActiveItem(newItem);
    onClose();
  };

  return (
    <Option
      option={option}
      colors={colors}
      onClose={onClose}
      onAddList={onAddList}
      visiblePopup={visiblePopup}
      selectColor={selectColor}
      setSelectColor={setSelectColor}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};

export default OptionContainer;
