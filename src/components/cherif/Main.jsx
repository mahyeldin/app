import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Main Component</h1>
      {/* Render nested routes */}
      <Outlet />
    </div>
  );
}

export default Main;
