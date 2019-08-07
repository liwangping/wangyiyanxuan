import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="search">
                    <i className="icon"></i>
                    <span className ="placeholder">搜索商品, 共21805款好物</span>
                </div>
            </>
         );
    }
}
 
export default Search;