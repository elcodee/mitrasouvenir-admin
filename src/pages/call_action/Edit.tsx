import { Button, Image, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlinePlus,
  AiOutlineSave,
  AiOutlineShopping,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function EditCta() {
  const [inputs, setInputs] = useState<any>({});
  const [preview, setPreview] = useState<any>("https://files.elcodee.com/mitrasouvenir/images/bg-slider-02.jpg")
  let navigate = useNavigate();

  const inputsHandle = async (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
          setInputs({
            ...inputs,
            banner: undefined
          })
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setInputs({
          ...inputs,
          banner: e.target.files[0]
        })
    }

    // console.log("IMG : ", inputs);
  
  useEffect(() => {
    if (!inputs.banner) {
      setInputs({
        ...inputs,
        banner: undefined
      })
        return
    }

    const objectUrl = URL.createObjectURL(inputs.banner)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [inputs.banner])

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
                      onClick={() => navigate("/call-to-action", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Call To Action / Edit / []</h4>
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
                        <h4 className="card-title mb-4">Edit Call To Action </h4>
                      </div>

                      <Input
                        fullWidth
                        label="Nama"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Nama"
                        type="text"
                        css={{ marginBottom: 20 }}
                        name="nama"
                        value="Whatsapp"
                        readOnly
                      />

                      <Input
                        clearable
                        fullWidth
                        label="Value"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Value / Link"
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="value"
                        value="628123456789"
                        onChange={(e) => inputsHandle(e)}
                      />

                      <Button
                        flat
                        color="success"
                        auto
                        icon={<AiOutlineSave fill="currentColor" />}
                      >
                        Simpan
                      </Button>
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
