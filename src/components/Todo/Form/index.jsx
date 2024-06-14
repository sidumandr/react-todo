import { useState } from "react";

function Form() {
  const [hoveredItem, setHoveredItem] = useState(null); // Hover edilen öğeyi tutacak state
  const [hoveredButton, setHoveredButton] = useState(false); // Buton üzerinde hover durumunu tutacak state

  const handleMouseEnterItem = (id) => {
    setHoveredItem(id); // Mouse ile öğenin üzerine gelindiğinde id'sini state'e kaydet
  };

  const handleMouseLeaveItem = () => {
    setHoveredItem(null); // Mouse öğenin üzerinden ayrıldığında state'i sıfırla
  };

  const handleButtonHover = () => {
    setHoveredButton(true); // Butona hover olduğunda state'i true yap
  };

  const handleButtonLeave = () => {
    setHoveredButton(false); // Butondan ayrıldığında state'i false yap
  };

  const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([]);
  const onChangeInput = (e) => {
    setNewItem(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  function addItem() {
    const trimEmpty = newItem.trim();

    if (!newItem || trimEmpty === "") {
      alert("Lütfen Bir Görev Giriniz!");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);

    setNewItem("");
  }

  function removeItem(id) {
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
  }

  return (
    <div>
      <div id="form">
        <input
          name="todoname"
          placeholder="What Needs To Be Done?"
          value={newItem}
          onChange={onChangeInput}
          onKeyDown={handleKeyDown}
        />

        <button className="btn" onClick={() => addItem()}>
          Add
        </button>
      </div>
      <ul className="list">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnterItem(item.id)}
              onMouseLeave={handleMouseLeaveItem}
              style={{
                backgroundColor:
                  hoveredItem === item.id && hoveredButton ? "#ead7d7" : "",
                color:
                  hoveredItem === item.id && hoveredButton
                    ? "rgba(58, 57, 73, 0.805)"
                    : "",
              }}
            >
              {item.value}
              <button
                className="removeBtn"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                onClick={() => removeItem(item.id)}
              >
                Sil
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
