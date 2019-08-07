import React, { Component } from 'react'
import './shoppingHeader.css'

class ShoppingHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="header">
                    <div className="left">
                        购物车
                    </div>
                    <div className="right">
                        <span className="getTicket">领券</span>
                        <span className="editor">编辑</span>
                    </div>
                </div>
            </>
         );
    }
}
 
export default ShoppingHeader;