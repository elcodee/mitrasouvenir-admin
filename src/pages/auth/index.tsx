import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API } from "../../server/endpoint";

export default function Login() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState<any>({});
  const [err, setErr] = useState<any>({
    is: false,
    msg: "",
  });

  const inputHandle = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandle = async (e: any) => {
    // setLoading(true);
    if (inputs.value === "") {
      setTimeout(() => {
        setErr({
          is: true,
          msg: "Nama Tidak Boleh Kosong",
        });
        // setLoading(false);
      }, 1500);
    } else {
      const { user, token, error } = await API.auth.login({
        ...inputs
      })

      if (user) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
          });

          Toast.fire({
            icon: "success",
            title: "Sign In Success",
          });

        setTimeout(() => {
          window.location.replace("/")
        }, 2000);
      } else {
          setErr({
            is: true,
            msg: "Email atau Password Salah",
          });
          // setLoading(false);
      }
    }
  };
  return (
    <>
      <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-white" />
        <div className="container">
          <div className="d-flex flex-column min-vh-100 px-3 pt-4">
            <div className="row justify-content-center my-auto">
              <div className="col-lg-10">
                <div className="py-5">
                  <div className="card auth-cover-card overflow-hidden">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="auth-img"></div>
                      </div>
                      {/* end col */}
                      <div className="col-lg-6">
                        <div className="p-4 p-lg-5 bg-primary h-100 d-flex align-items-center justify-content-center">
                          <div className="w-100">
                            {/* <div className="mb-4 mb-md-5">
                              <a
                                href="/signin"
                                className="d-block auth-logo"
                              >
                                <img
                                  src="https://files.elcodee.com/mitrasouvenir/admin/images/logo-light.png"
                                  alt=""
                                />
                              </a>
                            </div> */}
                            <div className="text-white-50 mb-4">
                              <h5 className="text-white">Welcome !</h5>
                              <p>Masuk Untuk Mengelola Toko Anda.</p>
                            </div>
                            {err.is ? (
                        <div className="alert alert-danger alert-top-border alert-dismissible text-danger fade show" role="alert">
                        <i className="uil uil-exclamation-octagon font-size-16 text-danger me-2" />
                       {err.msg}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                      </div>
                      
                      ) : null}

                              <div className="form-floating form-floating-custom mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="Enter User name"
                                  onChange={(e) => inputHandle(e)}
                                />
                                <label htmlFor="email">Email</label>
                                <div className="form-floating-icon">
                                  <i className="uil uil-at" />
                                </div>
                              </div>
                              <div className="form-floating form-floating-custom mb-3">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="Enter Password"
                                  onChange={(e) => inputHandle(e)}
                                />
                                <label htmlFor="password">Password</label>
                                <div className="form-floating-icon">
                                  <i className="uil uil-padlock" />
                                </div>
                              </div>
                              <div className="mt-3">
                                <button
                                  className="btn btn-info w-100"
                                  onClick={loginHandle}
                                >
                                  Sign In
                                </button>
                              </div>
                              <div className="mt-4 text-center">
                                <a
                                  href="/"
                                  className="text-white-50 text-decoration-underline"
                                >
                                  Forgot your password?
                                </a>
                              </div>
                            {/* end form */}
                          </div>
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end card */}
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center text-muted p-4">
                  <p className="mb-0">
                    © Mitra Souvenir Admin. <br/>  Crafted with <AiOutlineHeart /> by Elcode
                  </p>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
        </div>
        {/* end container */}
      </div>
    </>
  );
}
