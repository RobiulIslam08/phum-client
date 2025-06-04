
import { Layout, Menu, MenuProps,  } from 'antd';



const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
	const items:MenuProps['items'] = [
		{
			key:'1',
			label:"Dashboard",
			
		},
		{
			key:'2',
			label:"Profile"
		},
		{
			key:'3',
			label:"User Management",
			children:[
				{
			key:'11',
			label:"Admin Create"
		},
		{
			key:'22',
			label:"Faculty Create"
		},
			]
		},
		{
			key:'4',
			label:"Setting"
		}
	]




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
		<h1 style={{height:'50px', display: 'flex' , justifyContent:'center', alignItems:'center', color:'white', }}>Ph University</h1>
	   </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{height:"100vh"}}>
        <Header style={{ padding: 0,}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            
            }}
          >
      The Main Content should go here
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
		</div>
	);
};

export default MainLayout;