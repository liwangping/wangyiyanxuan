import React, { Component } from 'react';
import './homeSwiper.css'

class homeSwiper extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://yanxuan.nosdn.127.net/978d3c4254a79b7be5ba86a15b0a8557.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
                        </div>
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>        
                    {/* <!-- 如果需要滚动条 --> */}
                    <div className="swiper-scrollbar"></div>
                </div>
            </>
         );
    }
}
 
export default homeSwiper;