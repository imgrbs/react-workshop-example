import React, { Component } from 'react'
import Axios from 'axios';

export default class FormCreateProduct extends Component {
  state = {
    product_name: '',
    product_detail: '',
    price: 0.00
  }
  
  handleChangeProductName = (event) => {
    this.setState({
      product_name: event.target.value
    })
  }

  handleChangeProductDetail = (event) => {
    this.setState({
      product_detail: event.target.value
    })
  }
  
  handleChangeProductPrice = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()
    Axios.post(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products',
      {
        productName: this.state.product_name,
        productDetail: this.state.product_detail,
        productImage: 'https://th-test-11.slatic.net/original/f45c982578504ff2b4a5b0887dc54c2f.jpg_200x200Q100.jpg_.webp',
        price: this.state.price,
      }
    ).then(() => {
      alert('success!!!!')
    }).catch(() => {
      alert('fail!!!')
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div>
          <label htmlFor="">name: </label>
          {this.state.product_name}
          <br />
          <input 
            type="text" 
            value={this.state.product_name}
            onChange={this.handleChangeProductName}
          />
        </div>
        <div>
          <label htmlFor="">detail:</label>
          {this.state.product_detail}
          <br />
          <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            value={this.product_detail}
            onChange={this.handleChangeProductDetail}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">price</label>
          {this.state.price}
          <br/>
          <input 
            type="number" 
            value={this.state.price}
            onChange={this.handleChangeProductPrice}
            min="0"
            max="100"
          />
        </div>
        <div>
          <button>Create a product</button>
        </div>

        {/* <input type="text"/> */}
      </form>
    )
  }
}
