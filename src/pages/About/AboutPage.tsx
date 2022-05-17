import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { ROUTE_PATHS } from '../../index';

interface Props {}

const AboutPage = (props: Props) => {
  // Cut and paste to Routes.tsx
  // <Route path={ROUTE_PATHS.about} element={<AboutPage />} />

  return (
    <>
      {/* <MetaTags title="About" description="About page" /> */}

      <h1>About</h1>
      <Button />
      <Link to={ROUTE_PATHS.about}>About</Link>
      <Link to={ROUTE_PATHS.home}>Home</Link>
    </>
  );
};

export default AboutPage;
