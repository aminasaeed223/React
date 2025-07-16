import Item from "./MenuItem";

function List({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length ? 
                list.map(listItem => (
                    <Item key={listItem.id} item={listItem} />
                )) : null
            }
        </ul>
    );
}

export default List;