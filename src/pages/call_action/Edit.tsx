import { Button, Image, Input, Loading } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSave } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useLogic from "./Logic";

export default function EditCta() {
  let navigate = useNavigate();
  let { name } = useParams();
  const [inputs, setInputs] = useState<any>({});
  const [err, setErr] = useState<any>({
    is: false,
    msg: "",
  });
  const { data, getCtaByName, updateCtaByID, setLoading, loading } = useLogic();

  const inputHandle = (e: any) => {
    setInputs({
      ...inputs,
      name: name,
      [e.target.name]: e.target.value,
    });
  };

  const updateHandle = async (e: any) => {
    setLoading(true);
    if (inputs.value === "") {
      setTimeout(() => {
        setErr({
          is: true,
          msg: "Value Tidak Boleh Kosong",
        });
        setLoading(false);
      }, 1500);
    } else {
      let res: any = await updateCtaByID(data._id, inputs);

      if (res) {
        setTimeout(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
          });

          Toast.fire({
            icon: "success",
            title: "CTA Updated",
          });
        }, 1500);

        setTimeout(() => {
          navigate("/call-to-action/", { replace: true });
        }, 2500);
      }
    }
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      getCtaByName(name);
      setInputs({
        ...inputs,
        name: name,
        value: data.value,
      });
    }
  }, [data.value]);
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
                      onClick={() =>
                        navigate("/call-to-action", { replace: true })
                      }
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">CTA / Edit / {name}</h4>
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
                        <h4 className="card-title mb-4">
                          Edit Call To Action{" "}
                        </h4>
                      </div>

                      {err.is ? (
                        <div
                          className="alert alert-danger alert-outline alert-dismissible fade show"
                          role="alert"
                        >
                          <i className="uil uil-exclamation-octagon font-size-16 text-danger me-2" />
                          {err.msg}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          />
                        </div>
                      ) : null}

                      <Input
                        fullWidth
                        label="Nama"
                        size="lg"
                        placeholder="Nama"
                        type="text"
                        css={{ marginBottom: 20 }}
                        name="nama"
                        value={inputs.name}
                        disabled
                      />

                      <Input
                        clearable
                        fullWidth
                        label="Value"
                        size="lg"
                        placeholder={inputs.value}
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="value"
                        value={inputs.value}
                        onChange={(e) => inputHandle(e)}
                        disabled={loading}
                      />

                      {loading ? (
                        <Button
                          disabled
                          auto
                          bordered
                          color="secondary"
                          css={{ px: "$13" }}
                        >
                          <Loading
                            type="spinner"
                            color="currentColor"
                            size="sm"
                          />
                        </Button>
                      ) : (
                        <Button
                          flat
                          color="success"
                          auto
                          icon={<AiOutlineSave fill="currentColor" />}
                          onClick={updateHandle}
                        >
                          Simpan
                        </Button>
                      )}
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
