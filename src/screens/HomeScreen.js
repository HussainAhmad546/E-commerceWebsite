// import React from "react";
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// // import products from '../products'
// import { useEffect, useState } from "react";
// import axios from 'axios'
// const HomeScreen = () => {
//     const [products, setProducts] = useState([])
//     useEffect(() => {
//         const fetchProducts = async () => {
//             const { data } = await axios.get('http://localhost:5000/api/products')
        
//             setProducts(data)
//         }
//         fetchProducts()
//     }, [])
 


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useEffect } from "react";
import { listProducts } from '../actions/productActions'
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    const dispatch = useDispatch()
    const myProduct = useSelector((state) => state.productList)
    const { loading, error, products } = myProduct
    
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])


     return (
        <>
            <h1> Latest products</h1>
             {loading ? (
                 <Loader/>
             ) : error ? (
                     <Message variant='danger'>{ error}</Message>
                 ) : (
                      <Row>
                         {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            
            </Row>   
            )}
        </>
    )


    // return (
    //     <>
    //         <h1> Latest products</h1>
    //         <Row>
    //             {products.map((product) => (
    //                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
    //                     <Product product={product} />
    //                 </Col>
    //             ))}
            
    //         </Row>
    //     </>
    // )
}

export default HomeScreen