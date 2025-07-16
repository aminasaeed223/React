import { useState } from "react";
import List from "./MenuList";

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{ display: "flex", alignItems: "center", gap: "6px", cursor: hasChildren ? "pointer" : "default" }}
      >
        {hasChildren && (
          <span style={{ fontWeight: "bold" }}>
            {isOpen ? "➖" : "➕"}
          </span>
        )}
        <p>{item.title}</p>
      </div>

      {/* Conditionally render children */}
      {hasChildren && isOpen && (
        <List list={item.children} />
      )}
    </li>
  );
}

export default Item;
