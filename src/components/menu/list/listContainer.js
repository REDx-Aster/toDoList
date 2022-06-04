import List from '.';

const ListContainer = ({ lists, setLists, activeItem, setActiveItem }) => {
  const onActiveItem = (newActiveItem) => {
    if (activeItem !== newActiveItem) {
      setActiveItem(newActiveItem);
    }
  };

  const onRemoveList = (deletedItem) => {
    const newLists = lists.filter((item) => item !== deletedItem);
    const index = lists.indexOf(deletedItem);
    setLists(newLists);

    if (activeItem.id === deletedItem.id && index === 0) {
      setActiveItem(lists[1]);
    } else if (activeItem.id === deletedItem.id && index === newLists.length) {
      setActiveItem(lists[newLists.length - 1]);
    } else {
      setActiveItem(lists[index - 1]);
    }
  };
  return (
    <List
      lists={lists}
      activeItem={activeItem}
      onActiveItem={onActiveItem}
      onRemoveList={onRemoveList}
    />
  );
};

export default ListContainer;
