import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let sesarchQuery = query.get('q') || "";
    //let url = `https://api.jsonbin.io/v3/b/66c742b0acd3cb34a877fba3`
    let url = `https://my-json-server.typicode.com/JongryunKo/jr-hnm/products?q=${sesarchQuery}`
    let response = await fetch(url)
    // let response = await fetch(url, {
    //   headers: {
    //     'X-Master-Key' : '$2a$10$.NQn18npIx.hA1LeXR5KluhzNRuyfnkmuzsdZuNlVn2DpbpcdG/IK'
    //   }
    // })
    let data = await response.json();
    console.log("data ===>", data)
    //setProductList(data.record.products);
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll