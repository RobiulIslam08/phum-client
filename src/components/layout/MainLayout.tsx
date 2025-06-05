import { Layout, Menu } from "antd";
import {  Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

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
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div>
            <h1
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Ph University
            </h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={adminSidebarItems}
          />
        </Sider>
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
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
