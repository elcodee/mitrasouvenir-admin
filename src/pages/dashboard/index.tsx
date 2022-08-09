import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlineShopping,
} from "react-icons/ai";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Dashboard() {
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
                    <h4 className="mb-0">Dashboard</h4>
                    {/* <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Layouts</a>
                        </li>
                        <li className="breadcrumb-item active">Horizontal</li>
                      </ol>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  {/* Card */}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="font-size-xs text-uppercase">
                            Total Produk
                          </h6>
                          <h4 className="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                            <AiOutlineShopping
                              fontSize={22}
                              style={{ marginBottom: 2, marginRight: 3 }}
                            />
                            95
                          </h4>
                          <div className="text-muted">Produk Tersedia</div>
                        </div>
                        <div>
                          <div className="dropdown">
                            <a
                              className="dropdown-toggle btn btn-light btn-sm"
                              href="/products"
                            >
                              <span className="text-muted">
                                <AiOutlineHdd
                                  fontSize={12}
                                  style={{ marginBottom: 3, marginRight: 3 }}
                                />
                                Kelola Produk
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apex-charts mt-3"
                        id="sparkline-chart-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-sm-6">
                  {/* Card */}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="font-size-xs text-uppercase">
                            Total Pengunjung
                          </h6>
                          <h4 className="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                            <AiOutlineEye
                              fontSize={22}
                              style={{ marginBottom: 2, marginRight: 3 }}
                            />
                            33.712
                          </h4>
                          <div className="text-muted">Total Pengunjung</div>
                        </div>
                        <div>
                          <div className="dropdown">
                            <a
                              className="dropdown-toggle btn btn-light btn-sm"
                              href="#!"
                            >
                              <span className="text-muted">
                                <AiOutlineEye
                                  fontSize={12}
                                  style={{ marginBottom: 3, marginRight: 3 }}
                                />
                                Kelola Pengunjung
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apex-charts mt-3"
                        id="sparkline-chart-2"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end row*/}
              <div className="row">
                {/* end col*/}
                <div className="col-xl-12">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Sales Analytics</h4>
                      <div className="mt-1">
                        <ul className="list-inline main-chart mb-0 text-center">
                          <li className="list-inline-item chart-border-left me-0 border-0">
                            <h3 className="text-primary">
                              $<span data-plugin="counterup">3.85k</span>
                              <span className="text-muted d-inline-block fw-normal font-size-15 ms-2">
                                Income
                              </span>
                            </h3>
                          </li>
                          <li className="list-inline-item chart-border-left me-0">
                            <h3>
                              <span data-plugin="counterup">258</span>
                              <span className="text-muted d-inline-block fw-normal font-size-15 ms-2">
                                Sales
                              </span>
                            </h3>
                          </li>
                          <li className="list-inline-item chart-border-left me-0">
                            <h3>
                              <span data-plugin="counterup">52</span>k
                              <span className="text-muted d-inline-block fw-normal font-size-15 ms-2">
                                Users
                              </span>
                            </h3>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-3">
                        <div
                          id="sales-analytics-chart"
                          className="apex-charts"
                          dir="ltr"
                        />
                      </div>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
              </div>
              {/* end row */}
              {/* <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-4">
                          Produk Sering Dilihat
                        </h4>
                        <div></div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Produk</th>
                              <th>Nama</th>
                              <th>Dilihat</th>
                              <th colSpan={2} className="rounded-end">
                                Edit
                              </th>
                            </tr>
                          </thead>

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
                              <td className="fw-medium">Tumblr 1</td>
                              <td>819 x</td>
                              <td>
                                <a href="#!">
                                  <AiOutlineEdit fontSize={20} />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="me-2">
                                    <img
                                      src="https://files.elcodee.com/mitrasouvenir/images/product-02.jpg"
                                      className="avatar-md img-thumbnail"
                                      alt="Error"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="fw-medium">Tumblr 2</td>
                              <td>497 x</td>
                              <td>
                                <a href="#!">
                                  <AiOutlineEdit fontSize={20} />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>{" "}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
