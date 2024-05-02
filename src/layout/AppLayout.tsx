import { Link, Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <>
      <nav>
        <Link to="/examples/form">exmaple form</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
