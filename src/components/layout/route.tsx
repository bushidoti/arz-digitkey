import {Route, Routes} from "react-router-dom";
import React from "react";
import {Currency} from "../currency/currency";
import {Metal} from "../metal/metal";
import {Home} from "../home/home";


export const RouteLayout = () => {
    return (
         <Routes>
                <Route path={'/currency'} element={<Currency/>}/>
                <Route path={'/metal'} element={<Metal/>}/>
                <Route path={'/'} element={<Home/>}/>
         </Routes>
    )
}