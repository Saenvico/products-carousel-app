import ArrowLink from './ui/ArrowLink';
import { Product } from '../models/models';
import './styles/Styles.scss';

const Card: React.FC<Product> = (props) => {
  return (
    <div className="card">
      <h2 className="card__title card__text">{props.name}</h2>
      <p className="card__category card__text">{props.type}</p>
      <div className="card__img"></div>
      <div className="card__links">
        <div className="card__link"></div>
        <ArrowLink text="learn" name={props.name}></ArrowLink>
        <ArrowLink text="shop" name={props.name}></ArrowLink>
      </div>
    </div>
  );
};

export default Card;
