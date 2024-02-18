import React from 'react';
import {Layout} from 'antd';
import {MenuLayout} from "./menu";
import {RouteLayout} from "./route";

const { Content } = Layout;


const LayoutForm: React.FC = () => {

  return (
      <Layout>
        <Content className='m-1 h-[85vh]'>
            <div className='bg-gray-200 rounded-2xl min-h-[85vh] max-h-[85vh] overflow-auto' style={{padding: 24}}>
                <RouteLayout/>
            </div>
        </Content>
          <MenuLayout/>
      </Layout>
  );
};

export default LayoutForm;