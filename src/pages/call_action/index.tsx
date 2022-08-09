import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineHdd, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AddModal from "./modal/Add";
import DeleteModal from "./modal/Delete";
import useLogic from "./Logic"
import { Loading, Text } from "@nextui-org/react";

export default function CallToAction() {
  const { datas, loading } = useLogic();
  let navigate = useNavigate();

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
                    <h4 className="mb-0">Kelola Call To Action</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              
              {/* end row */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-4">
                        <h4 className="card-title">Semua Call To Action</h4>
                        <h4 className="card-title">
                        {/* <AddModal /> */}
                        {/* <button type="button" className="btn btn-secondary mb-4" onClick={() => navigate("/call-to-action/add", { replace: true })}><AiOutlinePlus fontSize={17} style={{ marginTop: -2, marginRight: 3 }} />Tambah</button> */}
                        </h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover table-nowrap mb-0 align-middle">
                          <thead className="bg-light">
                            <tr>
                              <th>Nama</th>
                              <th>Value</th>
                              <th colSpan={1} className="rounded-end">
                                Edit
                              </th>
                            </tr>
                            {/* end tr */}
                          </thead>
                          {/* end thead */}
                          <tbody>
                            {
                              loading ?
                            <tr>
                              <td className="fw-medium"></td>
                              <td className="fw-medium"> <Loading type="points-opacity" size="xl" color="primary">
                              
                              <Text h5 color="primary">loading ...</Text>
        </Loading>
                              </td>
                              <td></td>
                            </tr> : 
                            datas.map((item: any, index: any) => {
                              return(
                            <tr>
                              <td className="fw-medium">{item.name}</td>
                              <td className="fw-medium">{item.value}</td>
                              <td>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(`/call-to-action/edit/${item.name}`)}><AiOutlineEdit fontSize={20} /></button>
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
