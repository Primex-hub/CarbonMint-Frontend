import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

/**
 * Fallback page for unmatched routes.
 */
export default function NotFound() {
  return (
    <div className="page-header" style={{ textAlign: 'center', padding: '3rem 0' }}>
      <h1>404</h1>
      <p>That page drifted off into the carbon sink.</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
