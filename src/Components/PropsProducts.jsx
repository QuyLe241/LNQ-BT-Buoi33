import React from 'react'

const PropsProducts = ({item}) => {
  return (
    <div className="item col-3 shadow p-3 mb-5 bg-body-tertiary rounded m-3">
        <img src={item.image} className='w-100' alt="Ảnh giày" />
        <h3>{item.name}</h3>
        <p>Giá {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        {/* <p>Còn: {item.quantity}</p> */}
        <p></p>
        <div className="d-flex justify-content-center">
        {/* <button className=''>Xem chi tiết</button> */}
        {/* modal */}
        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Xem Chi Tiết
</button>


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Chi Tiết Sản Phẩm</h1>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

        {/* modal */}
        </div>
    </div>
  )
}

export default PropsProducts