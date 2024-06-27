import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Categories Slice/CategoriesSlice";
import { uploadSubcategory } from "../../Hooks/uploadSubcategory";

const AdminAddSubcategorycomp = () => {
  const [parentCategory, setParentCategory] = useState(0);
  const [message, setMessage] = useState(null);
  const categoriesList = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();
  const subName = useRef();

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    if (!subName.current.value || parentCategory === "0") {
      setMessage("Please fill all fields!");
      return;
    }
    const res = await uploadSubcategory(subName.current.value, parentCategory);
    if (!res.error) {
      setMessage("Subcategory added successfully!");
    } else {
      setMessage(res.error.message);
    }
  };

  useEffect(() => {
    console.log(parentCategory, typeof parentCategory);
  }, [parentCategory]);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new subcategory</div>
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : categoriesList.data[0] ? (
          <Col sm="8">
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="Subcategory name"
              ref={subName}
            />
            <select
              name="category"
              id="category"
              className="select mt-3 px-2"
              onChange={(e) => setParentCategory(e.target.value)}
            >
              <option value={0}>Choose option</option>
              {loading ? (
                <Spinner animation="border" role="status"></Spinner>
              ) : categoriesList.data[0] ? (
                categoriesList.data.map((category, idx) => {
                  return (
                    <option value={category.id} key={idx}>
                      {category.attributes.name}
                    </option>
                  );
                })
              ) : (
                "No categories found!"
              )}
            </select>
          </Col>
        ) : (
          <Alert variant="danger">
            No categories found. Please add some categories first!
          </Alert>
        )}
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          {loading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : categoriesList.data[0] ? (
            <button className="btn-save d-inline mt-2" onClick={handleSubmit}>
              Save
            </button>
          ) : null}
        </Col>
        <Col sm="8" className="d-flex justify-content-center">
          {message}
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddSubcategorycomp;
