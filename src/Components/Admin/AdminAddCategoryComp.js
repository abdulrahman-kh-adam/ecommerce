import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { uploadCategory } from "../../Hooks/uploadCategory";

const AdminAddCategoryComp = () => {
  const catName = useRef();
  const catColor = useRef();
  const catImage = useRef();
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    if (!catName.current.value || !catImage.current.value) {
      setMessage("Please fill all fields!");
      return;
    }
    const image = new FormData();
    image.append("files", catImage.current.files[0]);
    const resStat = await uploadCategory(
      catName.current.value,
      catColor.current.value,
      image
    );
    if (resStat[0][0].id && !resStat[1].error) {
      setMessage("Category added successfuly!");
      clearForm();
    } else if (resStat[1].error) {
      setMessage(resStat[1].error.message);
    } else {
      setMessage("Unkown Error");
    }
  };

  const clearForm = () => {
    catName.current.value = "";
    catImage.current.value = "";
    catColor.current.value = "#000000";
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category Image</div>
          <input type="file" name="image" ref={catImage} />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Category Name"
            name="name"
            ref={catName}
          />
          <div className="text-form mt-3 pb-2">Category Color</div>
          <input type="color" name="color" ref={catColor} />
        </Col>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2" onClick={handleSubmit}>
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

export default AdminAddCategoryComp;
