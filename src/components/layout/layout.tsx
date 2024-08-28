import React from 'react';
import {Layout} from 'antd';
import {MenuLayout} from "./menu";
import {RouteLayout} from "./route";

const { Content } = Layout;


const LayoutForm: React.FC = () => {

  return (
      <Layout>
          <Content className='m-1'>
            <div className='bg-gray-100 rounded-2xl min-h-[100vh] overflow-auto !mb-[60px]'
                 style={{padding: 24}}><RouteLayout/>
            </div>
          </Content>
          <MenuLayout/>
      </Layout>
  );
};

export default LayoutForm;