import React from 'react'
import ModalDetail from './ModalDetail'

const PropsProducts = ({item}) => {
  return (
    <div className="">
        <img src={item.image} className='w-100' alt="Ảnh giày" />
        <h3>{item.name}</h3>
        <p>Giá {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
         {/* <p>Còn: {item.quantity}</p> */}
        <p></p>
    </div>
  )
}

export default PropsProducts