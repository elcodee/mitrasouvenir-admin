import React from "react";
import { Modal, Button, Text, Card } from "@nextui-org/react";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

export default function DeleteModal({ id, name, img, action }: any) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  const deleteHandle = async () => {
    let res: any = await action.deleteCategoryByID(id);

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
          title: "Product Deleted",
        });
      }, 1500);
      
      setVisible(false);
    }
  };

  return (
    <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handler}
        >
          <AiOutlineDelete fontSize={20} style={{ color: "red" }} />
        </button>
      <Modal
        // blur
        scroll
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ marginLeft: 10, marginRight: 10 }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Hapus {name} ?
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

        <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
  </Card>

        </Modal.Body>
        <Modal.Footer>
        <Button auto onClick={closeHandler}>
            Tutup
          </Button>
          <Button auto flat color="error" onClick={deleteHandle}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
