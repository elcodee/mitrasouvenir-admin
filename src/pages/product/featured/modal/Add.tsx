import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Col, Card } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <button type="button" className="btn btn-secondary mb-4" onClick={handler}><AiOutlinePlus fontSize={17} style={{ marginTop: -2, marginRight: 3 }} />Tambah</button>
      <Modal
        // blur
        scroll
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ marginLeft: 10, marginRight: 10}}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Tambah Featured Produk
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
        <div className="form-floating mb-3">
                        <select className="form-select" id="kategori"
                        name="prod_cat"
                        // onChange={(e) => inputsHandle(e)}
                        >
                          <option disabled>
                            Pilih Produk
                          </option>
                          <option selected value="TMB-001">Tumblr 1</option>
                          <option value="TMB-002">Tumblr 2</option>
                          <option value="TMB-003">Tumblr 3</option>
                          <option value="Mug-1">Mug 1</option>
                          <option value="Mug-2">Mug 2</option>
                          <option value="Mug-3">Mug 3</option>
                          <option value="Glass-1">Glass 1</option>
                          <option value="Glass-2">Glass 2</option>
                          <option value="Glass-3">Glass 3</option>
                        </select>
                        <label htmlFor="kategori">Kategori</label>
                      </div>

                      <Card css={{ w: "100%", h: "400px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={20}>
            Tumblr 1
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Tutup
          </Button>
          <Button auto onClick={closeHandler}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
