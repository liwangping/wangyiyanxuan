import React, { Component } from 'react'
import ShoppingHeader from '../../components/shopping/shoppingHeader/shoppingHeader';
import ShoppingGoods from '../../components/shopping/shoppingGoods/shoppingGoods';
import SubmitBar from '../../components/shopping/submitBar/submitBar';
import TabBar from '../../components/common/tabBar/tabBar';



import './shopping.css'
class Shopping extends Component {
    state = {  }
    render() { 
        return (
        <>
            <div className="shopping">
            <div className="container">
                {/* 头部 */}
                <ShoppingHeader />
                <div className="content">
                    {/* 承诺条件 */}
                    <div className="tip">
                        <ul>
                            <li>
                                <i className="u-icon"></i>
                                <span className="content">30天无忧退货</span> 
                            </li>
                            <li>
                                <i className="u-icon"></i>
                                <span className="content">48小时快速退款</span>
                            </li>
                            <li>
                                <i className="u-icon"></i>
                                <span className="content">满88元免邮费</span>
                            </li>
                        </ul>
                    </div>
                    {/* 商品栏 */}
                    <ShoppingGoods/>
                </div>
                    {/* 提交栏 */}
                <SubmitBar/>
            </div>
        </div>
        <TabBar />
        </>
         );
    }
}
 
export default Shopping;