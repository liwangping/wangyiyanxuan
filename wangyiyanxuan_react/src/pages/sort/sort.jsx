import React, { Component } from 'react'
import { BrowserRouter as  NavLink } from "react-router-dom";
import Search from '../../components/common/search/search';
import Sortsalefirst from '../../components/sort/sortSale/sortSaleFirst';
import SortList from '../../components/sort/sortList/sortList';
import TabBar from '../../components/common/tabBar/tabBar';


import './sort.css'

class Sort extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <div className="m-sort">
            {/* 分类头部搜索框 */}
            <div className="sortSearch">
                <Search />
            </div>
            {/* 分类详情 */}
            <div className="sortDesc">
                {/* 左栏滑动区块 */}
                <div className="leftSwiper">
                    <SortList />
                </div>
                <div className="rightContent">
                    <Sortsalefirst />
                </div>
                </div>
            </div>        
            <TabBar />
        </>
         );
    }
}
 
export default Sort;