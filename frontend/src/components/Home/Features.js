import React from 'react'
function Features() {
  return (
<>
  {/* Featured Start */}

    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Sản Phẩm Chất Lượng</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Miễn Phí Vận Chuyển</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Hoàn Trả Trong 14 Ngày</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Hỗ Trợ 24/7</h5>
        </div>
      </div>
    </div>
  {/* Featured End */}
</>


  )
}

export default Features