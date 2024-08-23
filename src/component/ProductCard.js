import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div>
        <Card className='product-card' onClick={showDetail}>
          <div className='image-container'> 
            <Card.Img variant='top' src={item?.img} alt={item.title} style={{width: '100%'}} />
          </div>
        </Card>
        {/* <img src={item?.img} alt={item.title} style={{width: '100%'}} /> */}
        <div>{item?.choice == true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true? "신제품": ""}</div>
    </div>
  )
}

export default ProductCard