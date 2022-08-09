import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineHdd, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AddModal from "./modal/Add";
import DeleteModal from "./modal/Delete";

export default function CallToAction() {
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
                    <h4 className="mb-0">Kelola Call To Action</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              
              {/* end row */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="card-title">Semua Call To Action</h4>
                        <h4 className="card-title">
                        {/* <AddModal /> */}
                        {/* <button type="button" className="btn btn-secondary mb-4" onClick={() => navigate("/call-to-action/add", { replace: true })}><AiOutlinePlus fontSize={17} style={{ marginTop: -2, marginRight: 3 }} />Tambah</button> */}
                        </h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Nama</th>
                              <th>Value</th>
                              <th colSpan={1} className="rounded-end">
                                Edit
                              </th>
                            </tr>
                            {/* end tr */}
                          </thead>
                          {/* end thead */}
                          <tbody>
                            <tr>
                              <td className="fw-medium">Whatsapp</td>
                              <td className="fw-medium">08123456789</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                    <DeleteModal />
                              </td> */}
                            </tr>
                            {/* end /tr */}
                            <tr>
                              <td className="fw-medium">Instagram</td>
                              <td className="fw-medium">@mitrasouvenir</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                  <DeleteModal />
                              </td> */}
                            </tr>
                            <tr>
                              <td className="fw-medium">Shopee</td>
                              <td className="fw-medium">mitra_souvenir</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                  <DeleteModal />
                              </td> */}
                            </tr>
                            <tr>
                              <td className="fw-medium">Tokopedia</td>
                              <td className="fw-medium">mitra_souvenir</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                  <DeleteModal />
                              </td> */}
                            </tr>
                            <tr>
                              <td className="fw-medium">Workshop</td>
                              <td className="fw-medium">Jl Raya No 1</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                  <DeleteModal />
                              </td> */}
                            </tr>
                            <tr>
                              <td className="fw-medium">Custome</td>
                              <td className="fw-medium">08123456789</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/call-to-action/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              {/* <td>
                                  <DeleteModal />
                              </td> */}
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
