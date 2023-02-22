import { useNavigate } from 'react-router-dom';
import './styles/Styles.scss';

const ArrowLink: React.FC<{ text: string, name:string }> = (props) => {
const navigate = useNavigate();
const productName = props.name.split(' ').join('');
  return (
    <div
      onClick={() => navigate(`/${props.text}/${productName}`)}
      className="link__container"
    >
      <div className="link__text">{props.text}</div>
      <div className="arrow__icon arrow__inside--right"></div>
    </div>
  );
};

export default ArrowLink;
