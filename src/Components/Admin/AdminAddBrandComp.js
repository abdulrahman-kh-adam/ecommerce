import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { uploadBrand } from "../../Hooks/uploadBrand";

const AdminAddBrandComp = () => {
  const brandImage = useRef();
  const brandName = useRef();
  const [message, setMessage] = useState();

  const handleSubmit = async () => {
    if (!brandImage.current.value || !brandName.current.value) {
      setMessage("Please fill all fields!");
      return;
    }
    const image = new FormData();
    image.append("files", brandImage.current.files[0]);
    const resStat = await uploadBrand(brandName.current.value, image);
    if (resStat[0][0].id && !resStat[1].error) {
      setMessage("Brand added successfuly!");
      clearForm();
    } else if (resStat[1].error) {
      setMessage(resStat[1].error.message);
    } else {
      setMessage("Unkown Error");
    }
  };

  const clearForm = () => {
    brandName.current.value = "";
    brandImage.current.value = "";
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Brand Image</div>
          <input type="file" name="image" ref={brandImage} />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Brand Name"
            name="name"
            ref={brandName}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            Save
          </button>
        </Col>
        <Col sm="8" className="d-flex justify-content-center">
          {message}
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddBrandComp;
