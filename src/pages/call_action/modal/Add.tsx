import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
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
              Tambah Produk
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Kode Produk"
            type="text"
            css={{ marginTop: 50, marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Nama Produk"
            type="text"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Harga Produk"
            type="number"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Stok Produk"
            type="number"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Dilihat"
            type="number"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Terjual"
            type="number"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />

        <Input
            clearable 
            fullWidth
            helperText="Please enter your name"
            size="lg"
            placeholder="Terjual"
            type="number"
            css={{ marginBottom: 40 }}
            // contentLeft={<Mail fill="currentColor" />}
          />
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
