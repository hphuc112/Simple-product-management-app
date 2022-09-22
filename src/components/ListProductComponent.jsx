import React, { Component } from 'react';
import ProductService from '../services/ProductServices'


class ListProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products:[]
        }
        this.addProduct = this.addProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
      }
    
    componentDidMount(){
        ProductService.getProducts().then((res) =>{
            this.setState({products: res.data})
        })
    }

    addProduct(){
        this.props.history.push('/add-product')
    }
    editProduct(id){
        this.props.history.push(`/update-product/ ${id} `)

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Products List</h2>
                <div>
                    <button className='button' onClick={this.addProduct}>Add Product</button>
                </div>


                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product ID</th>
                                <th>Description</th>
                                <th>Admin activity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                    <tr key = {product.id}>
                                        <td> {product.productName} </td>
                                        <td> {product.productId} </td>
                                        <td> {product.description} </td>
                                        <td>
                                            <button onClick={() => this.editProduct(product.id)}>Edit</button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                    

                </div>
            </div>
        );
    }
}

export default ListProductComponent;