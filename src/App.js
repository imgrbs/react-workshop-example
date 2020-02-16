import React from 'react';
import axios from 'axios';
import FormCreateProduct from './components/FormCreateProduct';

import './App.css'


function Title(props) { // a.k.a. dump component
  return (
    <h1>{props.name}</h1>
  )
}
// 'prop-types' library ไปดูเอง55

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.item.product_image} style={{ maxWidth: '100%' }} alt=""/>
      <span className="product-name">{props.item.product_name}</span>
      <div className="product-description">
        {props.item.product_detail}
      </div>
      <div className="product-price">
        ฿{props.item.price}
      </div>
      <button className="btn btn-success btn-lg">Buy</button>
    </div>
  )
}



// a.k.a. smart component
class ProductList extends React.Component {
  state = {
    // key: value
    products: [
      {
        name: 'Oreo',
        description: 'Biscuit. 112g',
        price: 270.00
      },
      {
        name: '3D Mask ผู้ใหญ่',
        description: '3D Mask ผู้ใหญ่ บรรจุ 4 ชิ้น',
        price: 129.00
      },
      {
        name: 'กะเพรา',
        description: 'กะเพรา 4 ต้น',
        price: 10.50
      },
      {
        name: 'Bar-B-Plaza E-Vouncher',
        description: 'e-vouncher 100.-',
        price: 85.00
      },
    ],
    user: {
      name: 'Bas'
    }
  }

  componentDidMount = () => {
    axios.get(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products'
    ).then((response) => {
      console.log('response data', response)
      this.setState({
        products: response.data
      })
    })
  }

  render() { // !!!!!!!!!!!!! very important
    return ( // must return
      <div>
        <FormCreateProduct />
        <Title name={this.state.user.name} />
        <Title name="New Product!" />
        <ProductCard item={this.state.products[0]} />
        <Title name="Product list"/>
        <div>
          {this.state.products.map(
            (product) => (
              <ProductCard key={product.id} item={product} />
            )
          )}
        </div>
      </div>
    )
  }
}



export default ProductList
