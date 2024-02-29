import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--not-found not-found">
      <img src="img/404.png" alt="404" className="error" />
      <Link className="not-found__link" to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
