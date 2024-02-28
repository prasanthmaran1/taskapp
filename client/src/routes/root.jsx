import  { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import logo from '../assets/logo.svg';
import Task2 from '../pages/Task2Content'
import Task1 from '../pages/Task1Content'

const { Header, Content } = Layout;

const items = [
  { key: '1', label: 'Task 1' },
  { key: '2', label: 'Task 2' },
];



const App = () => {
  const [selectedTask, setSelectedTask] = useState('1'); // Default to Task 1

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedTask(e.key); // Update the state to the selected task
  };

  const renderContent = () => {
    switch (selectedTask) {
      case '1':
        return <Task1 />;
      case '2':
        return <Task2 />;
      default:
        return <div>Select a task</div>;
    }
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <div className="demo-logo">
          <img src={logo} alt="Logo" style={{ width: '100px', display: 'flex', alignItems: 'center' }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={handleMenuClick} // Handle menu click to update selected task
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '10px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </div>
      </Content>
    </Layout>
  );
};

export default App;
