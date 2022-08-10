import { Button, Input, Loading, Text } from "@nextui-org/react";
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
import DeleteModal from "./modal/Delete";
import useLogic from "../Logic";

export default function AllProduct() {
  let navigate = useNavigate();
  const { cat, datas, setLoading, loading, deleteProductByID }: any = useLogic();

  const actions: any = {
    deleteProductByID,
    loading,
    setLoading
  }

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
                      onClick={() => navigate("/product", { replace: true })}
                    >
                      Kembali
                    </Button>
                    <h4 className="mb-0">Kelola Product</h4>
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
                        <h4 className="card-title">Semua Produk</h4>
                        <h4 className="card-title">
                          {/* <AddModal /> */}
                          <button
                            type="button"
                            className="btn btn-secondary mb-4"
                            onClick={() =>
                              navigate("/products/add", { replace: true })
                            }
                          >
                            <AiOutlinePlus
                              fontSize={17}
                              style={{ marginTop: -2, marginRight: 3 }}
                            />
                            Tambah
                          </button>
                        </h4>
                      </div>
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option selected disabled>
                            Pilih kategori
                          </option>
                          {
                            cat ?
                            cat.map((item: any, index: any) => {
                              return(
                                <option value={item.name}>{item.name}</option>
                              )
                            }) :
                            null
                          }
                        </select>
                        <label htmlFor="floatingSelect">Filter Kategori</label>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Produk</th>
                              <th>Kode Produk</th>
                              <th>Nama Produk</th>
                              <th>Harga Produk</th>
                              <th>Dilihat</th>
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
                            {
                              loading ?
                              <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>
                              <Loading
                                    type="points-opacity"
                                    size="xl"
                                    color="primary"
                                  >
                                    <Text h5 color="primary">
                                      loading ...
                                    </Text>
                                  </Loading>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr> : 
                            datas.map((item: any, index: any) => {
                              return(
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="me-2">
                                    <img
                                      src={item.prod_thumb}
                                      className="avatar-md img-thumbnail"
                                      alt="Error"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="fw-medium">{item.prod_code}</td>
                              <td className="fw-medium">{item.prod_name}</td>
                              <td className="fw-medium">Rp {parseInt(item.prod_price).toLocaleString('id')}</td>
                              <td className="fw-medium">{parseInt(item.prod_see).toLocaleString('id')} x</td>
                              <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                      navigate(`/products/edit/${item.prod_code}`, {
                                        replace: true,
                                      })
                                    }
                                  >
                                    <AiOutlineEdit fontSize={20} />
                                  </button>
                              </td>
                              <td>
                                  <DeleteModal id={item._id} name={item.prod_name} img={item.prod_thumb} action={actions} />
                              </td>
                            </tr>
                              )
                            })
                            }
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
