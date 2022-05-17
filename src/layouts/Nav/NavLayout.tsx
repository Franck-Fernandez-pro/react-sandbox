import { Outlet } from 'react-router-dom';

type Props = {};

// Go to Routes.tsx and wrap your page in
// <Route element={<NavLayout />}></Route>

const NavLayout = ({}: Props) => (
  <>
    <div className="" data-testid="nav-layout">
      NavLayout
    </div>

    <Outlet />
  </>
);

export default NavLayout;
