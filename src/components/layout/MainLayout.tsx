import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const MainLayout = () => {
  //   const items: MenuProps["items"] = [
  //     {
  //       key: "Dashboard",
  //       label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  //     },

  //     {
  //       key: "User Management",
  //       label: "User Management",
  //       children: [
  //         {
  //           key: " Create Admin",
  //           label: <NavLink to="create-admin">Admin Create</NavLink>,
  //         },
  //         {
  //           key: " Create Student",
  //           label: <NavLink to="create-student">Create Student</NavLink>,
  //         },
  //         {
  //           key: " Create Faculty",
  //           label: <NavLink to="create-faculty">Create Faculty</NavLink>,
  //         },

  //       ],
  //     },
  //     {
  //       key: "4",
  //       label: "Setting",
  //     },
  //   ];


  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <Layout>
        <Sidebar />
        <Layout style={{ height: "100vh" }}>
        <Header><Button onClick={handleLogout}>Logout</Button> </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
         
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
