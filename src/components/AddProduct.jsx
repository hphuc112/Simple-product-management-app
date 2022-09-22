import React, { Component } from 'react';
import ProductServices from '../services/ProductServices';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName:'',
            productId:'',
            description:''

        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
    }
    saveProduct = (event) =>{
        event.preventDefault();
        let product = {productName: this.state.productName, productId: this.state.productId, description: this.state.description}
        console.log('product: ' + JSON.stringify(product))

        ProductServices.createProduct(product).then(res =>{
            this.props.history.push('/products')
        })
    }
    cancel(){
        this.props.history.push('/products')
    }

    
    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value})
    }
    changeProductIdHandler = (event) => {
        this.setState({productId: event.target.value})
    }
    changedescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className=''>
                            <h3>Add Product</h3>
                            <div>
                                <form>
                                    <div className='form'>
                                        <label>Product Name: </label>
                                        <input placeholder='Product name' type="text" value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className='form'>
                                        <label>Product Id: </label>
                                        <input placeholder='Product Id' type="text" value={this.state.productId} onChange={this.changeProductIdHandler} />
                                    </div>
                                    <div className='form'>
                                        <label>Description: </label>
                                        <input placeholder='Description' type="text" value={this.state.description} onChange={this.changedescriptionHandler} />
                                    </div>
                                    <button className='button-save' onClick={this.saveProduct}>Save</button>
                                    <button className='button-cancel' onClick={this.cancel.bind(this)}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;