import React from 'react'

const PropsProducts = ({item}) => {
  return (
    <div className="item col-3 shadow p-3 mb-5 bg-body-tertiary rounded m-3">
        <img src={item.image} className='w-100' alt="Ảnh giày" />
        <h3>{item.name}</h3>
        <p>Giá {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        {/* <p>Còn: {item.quantity}</p> */}
        <p></p>
        <button className=''>Xem chi tiết</button>

    </div>
  )
}

export default PropsProducts