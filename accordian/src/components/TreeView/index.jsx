import List from "./MenuList";
import "./style.css"

function Tree ({ menus = [] }){
    return (
        <div className="tree-view-container">
            <List list={menus} />
        </div>
    );
}
export default Tree;