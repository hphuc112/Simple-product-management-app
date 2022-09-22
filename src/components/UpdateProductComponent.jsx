import React, { Component } from 'react';
import ProductServices from '../services/ProductServices';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            productName:'',
            productId:'',
            description:''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }
    componentDidMount(){
        ProductServices.getProductById(this.state.id).then( (res) => {
            let product = res.data;
            this.setState({productName: product.productName,
                productId: product.productId,
                description: product.description

            })
        })
    }

    updateProduct = (e) =>{
        e.preventDefault();
        let product = {productName: this.state.productName, productId: this.state.productId, description: this.state.description}
        console.log('product: ' + JSON.stringify(product))
        

        ProductServices.updateProduct(product, this.state.id).then( res =>{
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
                            <h3>Edit Product</h3>
                            <div>
                                <form>
                                    <div className='form'>
                                        <label>Product Name: </label>
                                        <input placeholder='Product name' value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className='form'>
                                        <label>Product Id: </label>
                                        <input placeholder='Product Id'  value={this.state.productId} onChange={this.changeProductIdHandler} />
                                    </div>
                                    <div className='form'>
                                        <label>Description: </label>
                                        <input placeholder='Description' value={this.state.description} onChange={this.changedescriptionHandler} />
                                    </div>
                                    <button className='button-save' onClick={this.updateProduct}>Update</button>
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

export default UpdateProductComponent;