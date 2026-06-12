import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import './NotFound.css';

/**
 * Fallback page for unmatched routes.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>That page drifted off into the carbon sink.</p>
      <div className="not-found-action">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
