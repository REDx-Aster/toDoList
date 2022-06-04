import './list.scss';
import classNames from 'classnames';
import removeSvg from '../../../assets/img/remove.svg';
const List = ({ lists, activeItem, onActiveItem, onRemoveList }) => {
  return (
    <ul className="sidebar__list">
      {lists.map((item) => {
        return (
          <div
            key={item.id}
            className={classNames('sidebar__wrapper', {
              active: activeItem.id === item.id,
            })}>
            <li
              onClick={() => {
                onActiveItem(item);
              }}
              className="sidebar__item">
              <i className="sidebar__icon icon">
                <div className="icon__figure" style={{ backgroundColor: item.color }}></div>
              </i>
              <span className="sidebar__text">
                {item.name} {item.tasks && item.tasks.length > 0 && `(${item.tasks.length})`}
              </span>
            </li>
            <img
              onClick={() => {
                onRemoveList(item);
              }}
              className="sidebar__remove"
              src={removeSvg}
              alt="remove"
            />
          </div>
        );
      })}
    </ul>
  );
};

export default List;
