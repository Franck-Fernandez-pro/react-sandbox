import { Outlet } from 'react-router-dom';

interface Props {}

// Go to Routes.tsx and wrap your page in
// <Route element={<TemplateNameLayout />}></Route>

const TemplateNameLayout = ({}: Props) => (
  <>
    <div className="" data-testid="template_name-layout">
      TemplateNameLayout
    </div>

    <Outlet />
  </>
);

export default TemplateNameLayout;
