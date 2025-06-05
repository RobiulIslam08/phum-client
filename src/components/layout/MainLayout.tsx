import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

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

  return (
    <div>
      <Layout>
        <Sidebar />
        <Layout style={{ height: "100vh" }}>
          <Header style={{ padding: 0 }} />
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
