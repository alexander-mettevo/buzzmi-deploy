import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="main-layout">
          jljkjl
            <div className="main-layout__content">
              <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;