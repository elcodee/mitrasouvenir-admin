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

export default function EditSlides() {
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
                      onClick={() => navigate("/slide-show", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Slide Show / Edit / []</h4>
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
                        <h4 className="card-title mb-4">Edit Slide Show </h4>
                      </div>

                      <Input
                        clearable
                        fullWidth
                        label="Title"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Title Slide"
                        type="text"
                        css={{ marginBottom: 20 }}
                        name="title"
                        value="Beauty Inspired by Real Life"
                        onChange={(e) => inputsHandle(e)}
                      />

                      <Input
                        clearable
                        fullWidth
                        label="Sub Title"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Sub Title"
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="sub_title"
                        value="Made using clean, non-toxic ingredients, our products are designed for everyone."
                        onChange={(e) => inputsHandle(e)}
                      />

                      <div className="form-floating mb-3">
                        <select className="form-select" id="kategori"
                        name="category"
                        onChange={(e) => inputsHandle(e)}
                        >
                          <option disabled>
                            Pilih kategori
                          </option>
                          <option value="Tumblr">Tumblr</option>
                          <option value="Mug" selected>Mug</option>
                          <option value="Glass">Glass</option>
                        </select>
                        <label htmlFor="kategori">Kategori</label>
                      </div>

                      {
                        preview ?
                        <Image
                          showSkeleton
                          width={320}
                          height={180}
                          src={preview}
                          alt="Default Image"
                        /> : null
                      }

                      <Input
                        fullWidth
                        helperText="Resolusi Gambar 1920 x 770"
                        size="lg"
                        label="Banner"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="banner"
                        onChange={(e) => onSelectFile(e)}
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
