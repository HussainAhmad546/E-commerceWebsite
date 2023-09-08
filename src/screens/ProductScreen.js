import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useEffect, useState } from "react";
// import axios from 'axios'
import { listProductDetails } from '../actions/productActions';
// import products from '../products'
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form} from 'react-bootstrap';

const ProductScreen = () => {
    const { id } = useParams();
    const[qty, setQty]=useState(1)
    const dispatch = useDispatch()
    let navigate=useNavigate()
    const myProduct = useSelector((state) => state.productDetails)
    const { loading, error, product } = myProduct
    
    useEffect(() => {
        dispatch(listProductDetails(id))
        // dispatch(listProductDetails(match.params.id))
    }, [dispatch, id])
    
    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    }
    // const [product, setProduct] = useState([])
    // const product = products.find((p) => p._id === id);


    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get(`http://localhost:5000/api/products/${_id}`)
    //         setProduct(data)
    //     }

    //     fetchProducts()
    // }, [])
    



    //     {
    //         path: "/product/:id",
    //             url: "/product/123",
    //                 params:{id:"123"}
    // }

    // const product = productList.find((p) => p._id === _id);
    // const product = products.find((p) => p._id === _id);
    
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) :(
                <Row >
              <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid/>
              </Col>
              <Col md={3}>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>
                          <h3>{ product.name}</h3>
                      </ListGroup.Item>

                      <ListGroup.Item>
                          <Rating
                              value={product.rating}
                          text={`${product.numReviews} reviews`} />
                      </ListGroup.Item>
                      <ListGroup.Item> Price:${product.price}</ListGroup.Item>
                      <ListGroup.Item> Description:${product.description}</ListGroup.Item>
                  </ListGroup>
              </Col>

              <Col md={3}>
                  <Card>
                      <ListGroup variant='flush'>
                          <ListGroup.Item>
                              <Row>
                                  <Col>price:</Col>
                                  <Col>
                                      <strong>${ product.price}</strong>
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Row>
                                  <Col>Status:</Col>
                                  <Col>
                                  {product.countInStock>0?'In Stock': 'Out of Stock'}
                                  </Col>
                              </Row>
                    </ListGroup.Item>
                    
                                        
                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col>
                                                        <Form.Control
                                                            as='select'
                                                            value={qty}
                                                            onChange={(e)=>setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x+1}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                    )}                    
                          <ListGroup.Item>
                              <Button
                              onClick={addToCartHandler}
                                  className='btn-block'
                                  type='button'
                                //   disable={product.countInStock === 0 ? true : undefined}
                                  disable={product.countInStock === 0}
                              > Add to Cart</Button>
                    </ListGroup.Item>



                      </ListGroup>
                  </Card>
                </Col>

          </Row> )
}
    </>
  )
}

export default ProductScreen
