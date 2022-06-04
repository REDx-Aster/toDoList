import '../option.scss';
const Option = ({ option, toggleForm }) => {
  return (
    <ul className="option__list">
      <li onClick={toggleForm} className="option__item">
        <i className="option__icon icon">
          <img className="icon__image" src={option.icon} alt="icon" />
        </i>
        {option.title}
      </li>
    </ul>
  );
};

export default Option;
