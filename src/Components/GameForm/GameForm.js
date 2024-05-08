import { useEffect, useState } from "react";

const GameForm = ({ editGameData, onGameSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [ownedBy, setOwnedBy] = useState("");
  const [developedBy, setDevelopedBy] = useState("");

  useEffect(() => {
    if (editGameData) {
      setName(editGameData.name);
      setPrice(editGameData.price);
      setImage(editGameData.image);
      setType(editGameData.type);
      setReleaseDate(editGameData.description);
      setOwnedBy(editGameData.description);
      setDevelopedBy(editGameData.description);
    }
  }, [editGameData]);
  const nameHandler = (event) => setName(event.target.value);
  const priceHandler = (event) => setPrice(event.target.value);
  const imageHandler = (event) => setImage(event.target.value);
  const typeHandler = (event) => setType(event.target.value);
  const releaseDateHandler = (event) => setReleaseDate(event.target.value);
  const ownedByHandler = (event) => setOwnedBy(event.target.value);
  const developedByHandler = (event) => setDevelopedBy(event.target.value);

  const submitHandler = async (event) => {
    event.preventDefault();

    const newGame = {
      name,
      price,
      image,
      type,
      releaseDate,
      ownedBy,
      developedBy,
    };

    if (editGameData) {
      newGame.id = editGameData.id;
    }
    onGameSubmit(newGame);
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
        <label htmlFor="releaseDate">Release Date: </label>
        <input
          type="text"
          name="releaseDate"
          id="releaseDate"
          value={releaseDate}
          onChange={releaseDateHandler}
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="ownedBy">Owned By: </label>
        <input
          type="text"
          name="ownedBy"
          id="ownedBy"
          value={ownedBy}
          onChange={ownedByHandler}
        ></input>
      </div>
      <div className="form-control">
        <label htmlFor="developedBy">Developed by: </label>
        <input
          type="text"
          name="developedBy"
          id="developedBy"
          value={developedBy}
          onChange={developedByHandler}
        ></input>
      </div>
      <button type="submit">
        {editGameData ? "Edit Game" : "Create Game"}
      </button>
    </form>
  );
};

export default GameForm;
