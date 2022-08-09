import { Loading, Text } from "@nextui-org/react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useLogic from "./Logic";
import DeleteModal from "./modal/Delete";

export default function Category() {
  const { datas, setLoading, loading, deleteCategoryByID } = useLogic();
  let navigate = useNavigate();

  const actions = {
    deleteCategoryByID,
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
                    <h4 className="mb-0">Kelola Kategori</h4>
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
                        <h4 className="card-title">Semua Kategori</h4>
                        <h4 className="card-title">
                          {/* <AddModal /> */}
                          <button
                            type="button"
                            className="btn btn-secondary mb-4"
                            onClick={() =>
                              navigate("/category/add", { replace: true })
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
                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Nama</th>
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
                            {loading ? (
                              <tr>
                                <td className="fw-medium"></td>
                                <td>
                                  <Loading
                                    type="points-opacity"
                                    size="xl"
                                    color="primary"
                                  >
                                    <Text h5 color="primary">
                                      loading ...
                                    </Text>
                                  </Loading>{" "}
                                </td>
                                <td></td>
                              </tr>
                            ) : (
                              datas.map((item: any, index: any) => {
                                return (
                                  <tr>
                                    <td className="fw-medium">{item.name}</td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() =>
                                          navigate(
                                            `/category/edit/${item.name}`,
                                            { replace: true }
                                          )
                                        }
                                      >
                                        <AiOutlineEdit fontSize={20} />
                                      </button>
                                    </td>
                                    <td>
                                      <DeleteModal name={item.name} id={item._id} action={actions} />
                                    </td>
                                  </tr>
                                );
                              })
                            )}
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
