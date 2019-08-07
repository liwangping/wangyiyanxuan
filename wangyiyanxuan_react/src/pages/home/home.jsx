import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, } from "react-router-dom";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import Search from '../../components/common/search/search';
import HomeSwiper from '../../components/home/homeSwiper/homeSwiper';
import HomeSaleShow from '../../components/home/homeSaleShow/homeSaleShow';
import HomeFreshmanModule from '../../components/home/homeFreshmanModule/homeFreshmanModule';
import LimitTimeShop from '../../components/home/limitTimeShop/limitTimeShop';
import CategoryModule from '../../components/home/categoryModule/categoryModule';
import TabBar from '../../components/common/tabBar/tabBar';



import './home.css'


class Home extends Component {
    state = {  } 
    render() { 
        return (
        <>
            {/* 首页头部 */}
            <div className="home-header">
                <div className="line"> 
                    <NavLink  to ="/home">
                        <div className="logo"></div>
                    </NavLink>
                    <Search />
                    
                    <NavLink  to="/login">
                        <div className="login">登录</div>
                    </NavLink>
                </div>    
                {/* 标签栏 */}
                <div className="tabWrap">
                    {/* 滑动栏 */}
                    <div className="m-tabs">
                        <header>
                            <div className="inner"> 
                                <div className="list">
                                    <div className="tab">
                                        <span className="text active">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                    <div className="tab">
                                        <span className="text">推荐</span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                    {/* 下拉菜单 名字真难想*/}
                    <div className="toggleWrap">

                    </div>
                </div>  
            </div> 

            {/* 轮播图 */}
            <HomeSwiper />
 
            {/* 品牌保障 */}
            {/* brand ensure */}
            <div className="brand_ensure">
                <div className="condition">
                    <div className="u-icon icon-ziying"></div>
                    <div className="title">网易自营品牌</div>
                </div>         
                <div className="condition">
                    <div className="u-icon icon-30day"></div>
                    <div className="title">30天无忧退货</div>
                </div>         
                <div className="condition">
                    <div className="u-icon icon-48hour"></div>
                    <div className="title">48小时快速退款</div>
                </div>         
            </div>

            {/* 首页商品展示栏1栏 */}
            {/* HomeSaleShow */}
            <HomeSaleShow />

             {/* 新人专享礼展示栏 */}
            <HomeFreshmanModule />

            {/* 限时购 */}
            <LimitTimeShop />
            
            {/* 推荐模块 */}
            <CategoryModule />
        
            <TabBar />
        </>
         );
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            }
          });
    }
}
 
export default Home;