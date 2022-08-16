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
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useLogic from "../Logic";

export default function EditProduct() {
  const [inputs, setInputs] = useState<any>({});
  const [preview, setPreview] = useState<any>({
    prod_thumb: null,
    prod_img1: null,
    prod_img2: null,
    prod_img3: null,
  });
  const [uploadImg, setUploadImg] = useState<any>();
  const [catSelect, setCatSelect] = useState<boolean>(true);
  let navigate = useNavigate();
  let { code } = useParams();
  const { cat, data, setLoading, loading, getProductByCode, updateProductByID }: any = useLogic();

  const inputsHandle = async (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const imgPrev = URL.createObjectURL(e.target.files[0])
      setPreview({
        ...preview,
        [e.target.name]: imgPrev,
      });

      setUploadImg({
        ...uploadImg,
        [e.target.name]: e.target.files[0],
      });
    }

    setInputs({
      ...inputs,
      [e.target.name]: e.target.files[0],
    });
  };

  const updateHandle = async () => {
    if(
      !inputs.prod_name ||
        !inputs.prod_code ||
        !inputs.prod_price ||
        !inputs.prod_stock ||
        !inputs.prod_see ||
        !inputs.prod_sell ||
        !inputs.prod_shopee ||
        !inputs.prod_tokopedia ||
        !inputs.prod_category ||
        !inputs.prod_desc
    ) {
      console.log("EMPTY");
    } else {
      let res: any = await updateProductByID(data._id, inputs, uploadImg);
      console.log("RES : ", res);
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
            title: "Product Updated",
          });
        }, 1500);

        setTimeout(() => {
          navigate("/products", { replace: true });
        }, 2500);
      }
    }
  }
  

  useEffect(() => {
    let mount = true;

    if (mount) {
      getProductByCode(code);

      if(data.prod_category){
        setInputs({
          ...inputs,
          prod_name: data.prod_name,
          prod_code: data.prod_code,
          prod_price: data.prod_price,
          prod_stock: data.prod_stock,
          prod_see: data.prod_see,
          prod_sell: data.prod_sell,
          prod_shopee: data.prod_shopee,
          prod_tokopedia: data.prod_tokopedia,
          prod_category: data.prod_category,
          prod_desc: data.prod_desc,
        });
  
        setPreview({
          prod_thumb: data.prod_thumb,
          prod_img1: data.prod_img1,
          prod_img2: data.prod_img2,
          prod_img3: data.prod_img3,
        });
        console.log("DATA : ", data.prod_category);
      }
    }

    return () => {
      mount = false;
    };
  }, [data.prod_code]);

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
                    <h4 className="mb-0">Produk / Edit / {inputs.prod_name}</h4>
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
                        <h4 className="card-title mb-4">Edit Produk </h4>
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
                        value={inputs.prod_name}
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
                        value={inputs.prod_code}
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
                        value={inputs.prod_price}
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
                        value={inputs.prod_stock}
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
                        value={inputs.prod_see}
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
                        value={inputs.prod_sell}
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
                        value={inputs.prod_shopee}
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
                        name="prod_tokopedia"
                        value={inputs.prod_tokopedia}
                        onChange={(e) => inputsHandle(e)}
                      />

                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="kategori"
                          name="prod_category"
                          onChange={(e) => {
                            inputsHandle(e)
                            setCatSelect(false);
                          }}
                        >
                          <option selected>
                            Pilih ...
                            </option>
                          <hr />
                          {
                            cat ?
                            cat.map((item: any, index: any) => {
                              return(
                                <option value={item._id}>{item.name}</option>
                              )
                            }) :
                            null
                          }
                        </select>
                        <label htmlFor="kategori">Kategori</label>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          placeholder=" "
                          name="prod_desc"
                          id="desc"
                          style={{ height: "100px" }}
                          defaultValue={inputs.prod_desc}
                        />
                        <label htmlFor="desc">Deskripsi Produk</label>
                      </div>

                      {preview ? (
                        <Image
                          showSkeleton
                          width={320}
                          height={180}
                          src={preview.prod_thumb}
                          alt="Default Image"
                        />
                      ) : null}

                      <Input
                        fullWidth
                        helperText="Resolusi Gambar 1920 x 770"
                        size="lg"
                        label="Thumbnail Produk"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_thumb"
                        onChange={(e) => imageChange(e)}
                      />

                      {preview ? (
                        <Image
                          showSkeleton
                          width={320}
                          height={180}
                          src={preview.prod_img1}
                          alt="Default Image"
                        />
                      ) : null}

                      <Input
                        fullWidth
                        helperText="Resolusi Gambar 1920 x 770"
                        size="lg"
                        label="Gambar Produk 1"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img1"
                        onChange={(e) => imageChange(e)}
                      />

                      {preview ? (
                        <Image
                          showSkeleton
                          width={320}
                          height={180}
                          src={preview.prod_img2}
                          alt="Default Image"
                        />
                      ) : null}

                      <Input
                        fullWidth
                        helperText="Resolusi Gambar 1920 x 770"
                        size="lg"
                        label="Gambar Produk 2"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img2"
                        onChange={(e) => imageChange(e)}
                      />

                      {preview ? (
                        <Image
                          showSkeleton
                          width={320}
                          height={180}
                          src={preview.prod_img3}
                          alt="Default Image"
                        />
                      ) : null}

                      <Input
                        fullWidth
                        helperText="Resolusi Gambar 1920 x 770"
                        size="lg"
                        label="Gambar Produk 3"
                        type="file"
                        css={{ marginTop: 10, marginBottom: 40 }}
                        name="prod_img3"
                        onChange={(e) => imageChange(e)}
                      />

                      <Button
                        flat
                        color="success"
                        auto
                        icon={<AiOutlineSave fill="currentColor" />}
                        onClick={updateHandle}
                        disabled={
                          preview.prod_thumb && preview.prod_img1 && preview.prod_img2 && preview.prod_img3 && !catSelect ? false : true
                        }
                      >
                        Update
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
