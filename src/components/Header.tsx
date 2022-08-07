import { AiOutlineBell, AiOutlineClockCircle, AiOutlineFileDone, AiOutlineHdd, AiOutlineHome, AiOutlineLogout } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    src="https://files.elcodee.com/mitrasouvenir/admin/images/logo-sm.png"
                    alt=""
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="https://files.elcodee.com/mitrasouvenir/admin/images/logo-dark.png"
                    alt=""
                    height={22}
                  />
                </span>
              </a>
              <a href="/" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="https://files.elcodee.com/mitrasouvenir/admin/images/logo-sm.png"
                    alt=""
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="https://files.elcodee.com/mitrasouvenir/admin/images/logo-light.png"
                    alt=""
                    height={22}
                  />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AiOutlineBell fontSize={20} />
                <span className="noti-dot bg-danger" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="m-0 font-size-15"> Aktifitas </h5>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "250px" }}>
                  <h6 className="dropdown-header bg-light">Terbaru</h6>
                  <a href="#" className="text-reset notification-item">
                    <div className="d-flex border-bottom align-items-start">
                      <div className="flex-shrink-0">
                        <div className="avatar-sm me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="uil-shopping-basket" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Order Baru Via [WA, SHP, TKP]</h6>
                        <div className="text-muted">
                          {/* <p className="mb-1 font-size-13">
                            Open the order confirmation or shipment
                            confirmation.
                          </p> */}
                          <p className="mb-0 font-size-10 text-uppercase fw-bold">
                           <AiOutlineClockCircle fontSize={15} style={{ marginRight: 4 }} /> 5 Jam yang lalu
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 btn-block text-center"
                    href="javascript:void(0)"
                  >
                    <i className="uil-arrow-circle-right me-1" />{" "}
                    <span>View More..</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item user text-start d-flex align-items-center"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="https://files.elcodee.com/mitrasouvenir/admin/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="ms-2 d-none d-sm-block user-item-desc">
                  <span className="user-name">Elcode</span>
                  <span className="user-sub-title">Owner</span>
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end pt-0">
                <div className="p-3 bg-primary border-bottom">
                  <h6 className="mb-0 text-white">Elcode</h6>
                  <p className="mb-0 font-size-11 text-white-50 fw-semibold">
                    support@elcodee.com
                  </p>
                </div>
                {/* <a className="dropdown-item" href="pages-profile.html">
                  <i className="mdi mdi-wallet text-muted font-size-16 align-middle me-1" />{" "}
                  <span className="align-middle">
                    Balance : <b>Rp 1.000.000</b>
                  </span>
                </a> */}
                <a className="dropdown-item" href="https://mitrasouvenir.vercel.app">
                  <AiOutlineLogout fontSize={15} style={{ marginRight: 5, marginTop: 2}} />
                  <span className="align-middle">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div
                className="collapse navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                      className="nav-link arrow-none"
                      href="/"
                    >
                        <AiOutlineHome fontSize={18} />
                      <span data-key="t-horizontal">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link arrow-none"
                      href="/"
                    >
                        <AiOutlineFileDone fontSize={18} />
                      <span data-key="t-horizontal">Laporan</span>
                    </a>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-dashboard"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon nav-icon" data-feather="monitor" />
                      <span data-key="t-dashboards">Dashboards</span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-dashboard"
                    >
                      <a
                        href="/"
                        className="dropdown-item"
                        data-key="t-sales"
                      >
                        Sales
                      </a>
                      <a
                        href="dashboards-analytics.html"
                        className="dropdown-item"
                        data-key="t-analytics"
                      >
                        Analytics
                      </a>
                    </div>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
