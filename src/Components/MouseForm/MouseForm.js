import { useEffect, useState } from "react";

const MouseForm = ({ editMouseData, onMouseSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editMouseData) {
      setName(editMouseData.name);
      setPrice(editMouseData.price);
      setImage(editMouseData.image);
      setType(editMouseData.type);
      setDescription(editMouseData.description);
    }
  }, [editMouseData]);
  const nameHandler = (event) => setName(event.target.value);
  const priceHandler = (event) => setPrice(event.target.value);
  const imageHandler = (event) => setImage(event.target.value);
  const typeHandler = (event) => setType(event.target.value);
  const descriptionHandler = (event) => setDescription(event.target.value);

  const submitHandler = async (event) => {
    event.preventDefault();

    const newMouse = {
      name,
      price,
      image,
      type,
      description,
    };

    if (editMouseData) {
      newMouse.id = editMouseData.id;
    }
    onMouseSubmit(newMouse);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={nameHandler}
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="price">Price: </label>
        <input
          type="numbers"
          name="price"
          id="price"
          value={price}
          onChange={priceHandler}
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="url">Image: </label>
        <input
          type="url"
          name="url"
          id="url"
          value={image}
          onChange={imageHandler}
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="type">Choose type:</label>
        <select name="type" value={type} id="type" onChange={typeHandler}>
          <option value="empty">empty</option>
          <option value="new">new</option>
          <option value="empty">empty</option>
          <option value="empty">empty</option>
          <option value="empty">empty</option>
          <option value="empty">empty</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={descriptionHandler}
        ></input>
      </div>
      <button type="submit">
        {editMouseData ? "Edit Mouse" : "Create Mouse"}
      </button>
    </form>
  );
};

export default MouseForm;
