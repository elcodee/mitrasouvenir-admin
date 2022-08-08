import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineHdd, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Product() {
  let navigate = useNavigate();

  return (
    <>
      <div id="layout-wrapper">
        <Header />

        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row mt-3">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Product</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              
              {/* end row */}
              <div className="row">

              <div className="col-lg-4">
  <div className="card">
    <h4 className="card-header">Semua Produk</h4>
    <div className="card-body">
      <h4 className="card-title mb-1">95 Produk Terdisplay</h4>
      <p className="card-text">Mengelola seluruh produk yang ada di halaman catalog.</p>
      <a href="/products" className="btn btn-primary">Kelola</a>
    </div>
  </div>
</div>

<div className="col-lg-4">
  <div className="card">
    <h4 className="card-header">Produk Featured</h4>
    <div className="card-body">
      <h4 className="card-title mb-1">5 Produk Featured Terdisplay</h4>
      <p className="card-text">Mengelola seluruh produk featured di halaman homepage.</p>
      <a href="/products/featured" className="btn btn-primary">Kelola</a>
    </div>
  </div>
</div>

<div className="col-lg-4">
  <div className="card">
    <h4 className="card-header">Produk Sering Dilihat</h4>
    <div className="card-body">
      <h4 className="card-title mb-1">10 Produk Sering Dilihat</h4>
      <p className="card-text">Mengelola seluruh produk yang dilihat terbanyak.</p>
      <a href="#" className="btn btn-primary">Kelola</a>
    </div>
  </div>
</div>


              </div>
              {/* end row */}
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <Footer />
        </div>
        
      </div>
    </>
  );
}
