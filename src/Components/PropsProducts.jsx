import React from 'react'
import ModalDetail from './ModalDetail'

const PropsProducts = ({item, getData}) => {
  return (
    <div className="">
        <img src={item.image} className='w-100' alt="Ảnh giày" />
        <h3>{item.name}</h3>
        <p>Giá {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
         {/* <p>Còn: {item.quantity}</p> */}
        <p></p>
        <div className="d-flex justify-content-center">
        <button onClick={() => {
        getData(item);
                      // console.log(getDataShoe);
        }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Xem Chi Tiết
        </button>
        </div>
    </div>
  )
}

export default PropsProducts