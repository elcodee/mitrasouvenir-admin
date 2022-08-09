import { Button, Input, Loading } from "@nextui-org/react";
import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useLogic from "./Logic";

export default function AddCategory() {
  let navigate = useNavigate();
  const { createCategory, setLoading, loading } = useLogic();
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

  const createHandle = async (e: any) => {
    setLoading(true);
    if (inputs.value === "") {
      setTimeout(() => {
        setErr({
          is: true,
          msg: "Nama Tidak Boleh Kosong",
        });
        setLoading(false);
      }, 1500);
    } else {
      let res: any = await createCategory(inputs);

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
            title: "Category Created",
          });
        }, 1500);

        setTimeout(() => {
          navigate("/category", { replace: true });
        }, 2500);
      }
    }
  };

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
                      onClick={() => navigate("/category", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Category / Add</h4>
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

              {/* end row */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-4">Tambah Kategori </h4>
                      </div>

                      <Input
                        clearable
                        fullWidth
                        label="Nama"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Nama Kategori"
                        type="text"
                        css={{ marginBottom: 20 }}
                        name="name"
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
                        icon={<AiOutlinePlus fill="currentColor" />}
                        onClick={createHandle}
                      >
                        Tambah
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
