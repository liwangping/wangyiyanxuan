import React, { Component } from 'react';
import './homeSaleShow.css'
class HomeSaleShow extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {/* 首页商品展示栏1栏 */}
            <div className="m-kingKongModule">
                <div className="kingKong-container">
                    <div className="kingKong-wrapper">
                        <div className="container">
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""/>
                                </div>
                                <div className="txt">
                                    新品首发
                                </div>
                            </a> 
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt=""/>
                                </div>
                                <div className="txt">
                                    居家生活
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt=""/>
                                </div>
                                <div className="txt">
                                    服饰鞋包
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt=""/>
                                </div>
                                <div className="txt">
                                    美食酒水
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt=""/>
                                </div>
                                <div className="txt">
                                    个护清洁
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt=""/>
                                </div>
                                <div className="txt">
                                    母婴亲子
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt=""/>
                                </div>
                                <div className="txt">
                                    运动旅行
                                </div>
                            </a>
                            
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt=""/>
                                </div>
                                <div className="txt">
                                    数码家电
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt=""/>
                                </div>
                                <div className="txt">
                                    全球特色
                                </div>
                            </a>
                            <a href="" className="kingKong-item">
                                <div className="icon">
                                    <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt=""/>
                                </div>
                                <div className="txt">
                                    超级会员
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="kingKong-pagination"></div>
                </div>
            </div>
        
            </>
         );
    }
}
 
export default HomeSaleShow;