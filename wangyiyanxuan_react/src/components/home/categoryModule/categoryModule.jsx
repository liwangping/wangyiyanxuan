import React, { Component } from 'react';
import './categoryModule.css'
class CategoryModule extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <div className="categoryModule index-floor">
                    <div className="container">
                        <a className="bannder">
                            <img src="https://yanxuan.nosdn.127.net/3c56acc396f11103327739ee84d7b70c.jpg?imageView&amp;thumbnail=750x0&amp;quality=75" alt=""/>
                        </a>
                        <div className="swiper-container">
                            <div className="list">
                                <div className="item">
                                    <a href="" className="good">
                                        <div className="header">
                                            <div className="container">
                                                <img src="http://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                                            </div>                                   
                                        </div>
                                        <div className="desc">
                                            <span className="title">男式精梳圆领短袖T恤衫</span>
                                            <div className="price">
                                                <div className="newprice">￥29.4</div>
                                                <div className="oldprice">￥49</div>
                                            </div>
                                            <span className="gradientPrice">特价</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="" className="good">
                                        <div className="header">
                                            <div className="container">
                                                <img src="http://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                                            </div>                                   
                                        </div>
                                        <div className="desc">
                                            <span className="title">男式精梳圆领短袖T恤衫</span>
                                            <div className="price">
                                                <div className="newprice">￥29.4</div>
                                                <div className="oldprice">￥49</div>
                                            </div>
                                            <span className="gradientPrice">特价</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default CategoryModule;