import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts=async()=>{

        let url = `https://api.jsonbin.io/v3/b/66c742b0acd3cb34a877fba3`
        let response = await fetch(url, {
          headers: {
            'X-Master-Key' : '$2a$10$.NQn18npIx.hA1LeXR5KluhzNRuyfnkmuzsdZuNlVn2DpbpcdG/IK'
          }
        })
        let data = await response.json();
        console.log("data ===>", data)
        setProductList(data.record.products);
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
        <Container>
          <Row>
            {productList.map( (menu) => (
              <Col lg={3}>
                <ProductCard item={menu}/>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  )
}

export default ProductAll