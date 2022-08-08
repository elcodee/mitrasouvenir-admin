import { Button, Input } from "@nextui-org/react";
import {
  AiOutlineArrowLeft,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AddModal from "./modal/Add";
import DeleteModal from "./modal/Delete";

export default function FeaturedProduct() {
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
                    <Button
                      flat
                      color="primary"
                      auto
                      icon={<AiOutlineArrowLeft fill="currentColor" />}
                      onClick={() => navigate("/product", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Kelola Product Featured</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}

              {/* end row */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title">Semua Produk Featured</h4>
                        <h4 className="card-title">
                          <AddModal />
                          {/* <button
                            type="button"
                            className="btn btn-secondary mb-4"
                            onClick={() =>
                              navigate("/products/add", { replace: true })
                            }
                          >
                            <AiOutlinePlus
                              fontSize={17}
                              style={{ marginTop: -2, marginRight: 3 }}
                            />
                            Tambah
                          </button> */}
                        </h4>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Produk</th>
                              <th>Kode Produk</th>
                              <th>Nama Produk</th>
                              <th>Harga Produk</th>
                              <th>Dilihat</th>
                              <th colSpan={1} className="rounded-end">
                                Delete
                              </th>
                            </tr>
                            {/* end tr */}
                          </thead>
                          {/* end thead */}
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="me-2">
                                    <img
                                      src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                                      className="avatar-md img-thumbnail"
                                      alt="Error"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="fw-medium">TMB-001</td>
                              <td className="fw-medium">Tumblr 1</td>
                              <td className="fw-medium">Rp 235.000</td>
                              <td className="fw-medium">831 x</td>
                              <td>
                                <a href="#!">
                                  {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                  <DeleteModal />
                                </a>
                              </td>
                            </tr>
                            {/* end /tr */}
                          </tbody>
                          {/* end tbody */}
                        </table>
                        {/* end table */}
                      </div>
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
