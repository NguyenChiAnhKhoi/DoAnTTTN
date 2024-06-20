import React from 'react'
import { Link } from 'react-router-dom'
function Offer() {
  return (
    <>
    {/* Offer Start */}

      <div className="row px-xl-5">
        <div className="col-md-6 pb-4">
          <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
            <img src={require("../../assets/img/offer-1.png")} alt="" />
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h5 className="text-uppercase text-primary mb-3">
                Giảm giá 20% cho tất cả đơn hàng 
              </h5>
              <h1 className="mb-4 font-weight-semi-bold">Thời Trang Mùa Xuân</h1>
              <Link to={'/tat-ca-san-pham'} className="btn btn-outline-primary py-md-2 px-md-3">
               Xem ngay
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 pb-4">
          <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
            <img src={require("../../assets/img/offer-2.png")} alt="" />
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h5 className="text-uppercase text-primary mb-3">
               Giảm giá 20% cho tất cả đơn hàng
              </h5>
              <h1 className="mb-4 font-weight-semi-bold">Thời Trang Mùa Đông</h1>
              <Link to={'/tat-ca-san-pham'} className="btn btn-outline-primary py-md-2 px-md-3">
               Xem ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

    {/* Offer End */}
  </>
  

  )
}

export default Offer