import React from 'react'

const ModalDetail = ({dataShoe, data}) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Chi Tiết Sản Phẩm</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body d-flex justify-content-center row">
        <img src={data.image} className='' alt="" />
        <h5 className='text-center'>Tên giày: {data.name}</h5>
        <p>Alias: {data.alias}</p>
        <p>Giá: {data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>Mô tả: {data.description}</p>
        <p>Số lượng: {data.quantity}</p>
        
      </div>  
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalDetail