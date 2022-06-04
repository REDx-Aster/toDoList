import '../option.scss';
const Option = ({ option, onActiveItem }) => {
  return (
    <ul className="option__list option__list--top">
      <li onClick={onActiveItem} className="option__item">
        <i className="option__icon icon">
          <img className="icon__image" src={option.icon} alt="icon" />
        </i>
        {option.title}
      </li>
    </ul>
  );
};

export default Option;
