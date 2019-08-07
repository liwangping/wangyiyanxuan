import React, { Component } from 'react'
import { BrowserRouter as  NavLink} from "react-router-dom";
import MineHeader from "../../components/mine/mineHeader/mineHeader";
import MineAssets from "../../components/mine/mineAssets/mineAssets";
import MineOther from "../../components/mine/mineOther/mineOther";
import MineLoginOut from "../../components/mine/mineLoginout/mineLoginout";
import TabBar from '../../components/common/tabBar/tabBar';


import  './mine.css'
class Mine extends Component {
    state = {  }
    render() { 
        return (
        <>
            <div className="mine">
                    <div className="container">
                        {/* 头部信息 */}
                        <MineHeader/>
                        {/* 我的资产 */}
                         <MineAssets />
                         {/* 其他九宫格布局 */}
                        <MineOther />
                        <MineLoginOut />
                    </div>    
            </div>  
            <TabBar />
        </>
         );
    }
}
 
export default Mine;