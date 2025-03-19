import { Link } from 'react-router';

const NotFound = () => {
  return (
    <>
      <h1>404 - The page was not found!</h1>
      <Link to="/">Return to Home page</Link>
    </>
  );
};

export default NotFound;
