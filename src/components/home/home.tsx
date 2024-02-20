import {Metal} from "../metal/metal";
import {Currency} from "../currency/currency";
import {Divider, Space} from "antd";
import React from "react";

export const Home = () => {
    return (
        <Space direction="vertical" size={10} >
                <Metal/>
                <Divider />
                <Currency/>
        </Space>
    )
}