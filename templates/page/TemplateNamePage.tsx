import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../index';

interface Props {}

const TemplateNamePage = (props: Props) => {
  // Cut and paste to Routes.tsx
  // <Route path={ROUTE_PATHS.templateName} element={<TemplateNamePage />} />

  return (
    <>
      {/* <MetaTags title="TemplateName" description="TemplateName page" /> */}

      <h1>TemplateName</h1>
      <Link to={ROUTE_PATHS.templateName}>TemplateName</Link>
    </>
  );
};

export default TemplateNamePage;
