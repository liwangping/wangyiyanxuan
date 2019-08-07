import React, { Component } from 'react';
import './submitBar.css'

class SubmitBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="submitBar">             
                    <div className="left">
                        <div className="left-Button">
                            <div className="chooseButton"></div>
                        </div>
                        <span>已选(1)</span>
                    </div>
                    <div className="content">
                        <div className="AllPrice">合计:￥189</div>
                        <div className="tip">已优惠:￥10</div>
                    </div>
                    <div className="right">下单</div>
                </div>
            </>
         );
    }
}
 
export default SubmitBar;