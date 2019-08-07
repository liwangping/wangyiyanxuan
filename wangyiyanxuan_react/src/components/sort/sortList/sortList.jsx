import React, { Component } from 'react';

class sortList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <ul className="list">
                        <li className="item">
                            <a className="txt" href="">推荐专区</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">夏凉专区</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">爆品专区</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">新品专区</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">居家专区</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">服饰鞋包</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">美食酒水</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">个护清洁</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">母婴亲子</a>    
                        </li>
                        <li className="item">
                            <a className="txt" href="">运动旅行</a>    
                        </li>                     
                        <li className="item">
                            <a className="txt" href="">数码家电</a>    
                        </li>                     
                        <li className="item">
                            <a className="txt" href="">全球特色</a>    
                        </li>                     
                    </ul>
            </>
         );
    }
}
 
export default sortList;