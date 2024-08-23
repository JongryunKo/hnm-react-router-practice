import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null)
  const [selectSize, setSelectSize] = useState('사이즈 선택');
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/JongryunKo/hnm-react-router-practice/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log('ProductDetail Data===>', data)
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  })
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}></img>
        </Col>
        <Col className='right-elements'>
          <div className="spacing-10px">{product?.title}</div>
          <div className="spacing-10px">₩{product?.price}</div>
          <div className="spacing-10px">{product?.choice == true ? 'Conscious choice' : ''}</div>
          <DropdownButton className='spacing-10px' id="dropdown-basic-button" title={selectSize}>
            {product?.size ? product.size.map((size, index) => (
              <Dropdown.Item key={index} onClick={() => setSelectSize(size)}>{size}</Dropdown.Item>
            )) : ""
            }
          </DropdownButton>
          <div className='spacing-10px'>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg">
                추가
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail