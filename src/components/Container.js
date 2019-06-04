import React, { Component } from 'react'
import './../asset/css/container.css';
import Product from './Product';
import img from './../asset/img/meituan.jpg';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[

            ]
            ,
            product:[
                {
                    product_id:'1',
                    img:img
                }, {
                    product_id:'2',
                    img:img
                }, {
                    product_id:'3',
                    img:img
                },
                {
                    product_id:'4',
                    img:img
                },
            ]
        }
    }
render(){
        return (
            <div className="container">
                <div className="con-title">{this.props.title}</div>
                <div className="con-content">
                    {/*{this.props.children}*/}
                    {
                        this.state.product.map((elem,index)=>{
                            // return <Link key={elem.product_id}  to="/detail"><Product elem={elem}></Product></Link>
                            return <Product key={elem.product_id} elem={elem}></Product>
                        })
                    }
                </div>
            </div>
        )
    }
}


