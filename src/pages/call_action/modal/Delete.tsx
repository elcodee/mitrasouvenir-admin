import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Card, Grid, Col } from "@nextui-org/react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

export default function DeleteModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <a href="#!">
        {/* <i className="mdi mdi-dots-horizontal font-size-18 text-muted" /> */}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handler}
        >
          <AiOutlineDelete fontSize={20} style={{ color: "red" }} />
        </button>
      </a>
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
              Hapus Slider ?
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

        <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h4 color="black">
          Stream the Acme event
        </Text>
        <Text size={12} weight="bold" transform="uppercase" color="black">
          What to watch
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://files.elcodee.com/mitrasouvenir/images/bg-slider-01.jpg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>

        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Tutup
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
