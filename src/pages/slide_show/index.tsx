import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineHdd, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AddModal from "./modal/Add";
import DeleteModal from "./modal/Delete";

export default function SlideShow() {
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
                    <h4 className="mb-0">Kelola Slide Show</h4>
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
                        <h4 className="card-title">Semua Slide Show</h4>
                        <h4 className="card-title">
                        {/* <AddModal /> */}
                        <button type="button" className="btn btn-secondary mb-4" onClick={() => navigate("/slide-show/add", { replace: true })}><AiOutlinePlus fontSize={17} style={{ marginTop: -2, marginRight: 3 }} />Tambah</button>
                        </h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Produk</th>
                              <th>Title</th>
                              <th colSpan={1} className="rounded-end">
                                Edit
                              </th>
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
                                      src="https://files.elcodee.com/mitrasouvenir/images/bg-slider-01.jpg"
                                      className="avatar-md img-thumbnail"
                                      alt="Error"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="fw-medium">Tumblr 1</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/slide-show/edit", { replace: true })}><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <DeleteModal />
                                  </a>
                              </td>
                            </tr>
                            {/* end /tr */}
                            <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                  <div className="me-2">
                                    <img
                                      src="https://files.elcodee.com/mitrasouvenir/images/bg-slider-02.jpg"
                                      className="avatar-md img-thumbnail"
                                      alt="Error"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="fw-medium">Tumblr 2</td>
                              <td>
                                  <a
                                    href="#!"
                                  >
                                    {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
                                    <button type="button" className="btn btn-outline-secondary"><AiOutlineEdit fontSize={20} /></button>
                                  </a>
                              </td>
                              <td>
                                  <DeleteModal />
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
