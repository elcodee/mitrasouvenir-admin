import { Button, Image, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
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

export default function AddProduct() {
  const [inputs, setInputs] = useState<any>({});
  const [preview, setPreview] = useState<any>()
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
                      onClick={() => navigate("/products", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Produk / Add</h4>
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
                        <h4 className="card-title mb-4">Tambah Produk </h4>
                      </div>

                      <Input
                        clearable
                        fullWidth
                        label="Nama Produk"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Nama Produk"
                        type="text"
                        css={{ marginBottom: 20 }}
                        name="prod_name"
                        onChange={(e) => inputsHandle(e)}
                      />

                      <Input
                        clearable
                        fullWidth
                        label="Kode Produk"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Kode Produk"
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="prod_code"
                        onChange={(e) => inputsHandle(e)}
                      />

                      <Input
                        clearable
                        fullWidth
                        label="Harga Produk"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Harga Produk"
                        type="number"
                        css={{ marginBottom: 18 }}
                        name="prod_price"
                        onChange={(e) => inputsHandle(e)}
                      />
                      
                      <Input
                        clearable
                        fullWidth
                        label="Stok Produk"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Stok Produk"
                        type="number"
                        css={{ marginBottom: 18 }}
                        name="prod_stock"
                        onChange={(e) => inputsHandle(e)}
                      />

<Input
                        clearable
                        fullWidth
                        label="Dilihat"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Dilihat"
                        type="number"
                        css={{ marginBottom: 18 }}
                        name="prod_see"
                        onChange={(e) => inputsHandle(e)}
                      />

<Input
                        clearable
                        fullWidth
                        label="Terjual"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Terjual"
                        type="number"
                        css={{ marginBottom: 18 }}
                        name="prod_sell"
                        onChange={(e) => inputsHandle(e)}
                      />

<Input
                        clearable
                        fullWidth
                        label="Link Shopee"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Link Shopee"
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="prod_shopee"
                        onChange={(e) => inputsHandle(e)}
                      />

<Input
                        clearable
                        fullWidth
                        label="Link Tokopedia"
                        // helperText="Please enter your name"
                        size="lg"
                        placeholder="Link Tokopedia"
                        type="text"
                        css={{ marginBottom: 18 }}
                        name="prod_tokped"
                        onChange={(e) => inputsHandle(e)}
                      />

                      <div className="form-floating mb-3">
                        <select className="form-select" id="kategori"
                        name="prod_cat"
                        onChange={(e) => inputsHandle(e)}
                        >
                          <option selected disabled>
                            Pilih kategori
                          </option>
                          <option value="Tumblr">Tumblr</option>
                          <option value="Mug">Mug</option>
                          <option value="Glass">Glass</option>
                        </select>
                        <label htmlFor="kategori">Kategori</label>
                      </div>

                      <div className="form-floating mb-3">
  <textarea className="form-control" placeholder=" " name="prod_desc" id="desc" style={{height: '100px'}} defaultValue={""} />
  <label htmlFor="desc">Deskripsi Produk</label>
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
                        label="Thumbnail Produk"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_thumb"
                        onChange={(e) => onSelectFile(e)}
                      />

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
                        label="Gambar Produk 1"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img1"
                        onChange={(e) => onSelectFile(e)}
                      />

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
                        label="Gambar Produk 2"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img2"
                        onChange={(e) => onSelectFile(e)}
                      />

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
                        label="Gambar Produk 3"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img3"
                        onChange={(e) => onSelectFile(e)}
                      />

                      <Button
                        flat
                        color="success"
                        auto
                        icon={<AiOutlinePlus fill="currentColor" />}
                      >
                        Tambah
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
