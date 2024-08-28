import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
       <ConfigProvider locale={fa_IR} direction="rtl"  theme={{
        components: {
           Menu: {
                horizontalItemBorderRadius: 50,
                iconSize: 50,
                horizontalItemHoverBg: 'rgba(0,0,0,0.22)',
                darkItemSelectedBg: 'rgba(22,119,255,0.49)',
            }
        }
    }}>
          <BrowserRouter>
                     <App/>
          </BrowserRouter>
      </ConfigProvider>
);
reportWebVitals();
