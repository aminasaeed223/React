
import User from './userComponent'
const name = "Amina Saeed Rana"
function sum(a,b){
        return a+b
}
const path = "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg"
const obj={
name:"Amina Saeed"
}
const funcall = ()=>{
        alert('Hello!! You clicked me')
}

function App(){
        return(
               <>
                <h1>Hellow this component</h1>
                <Person/>
                <User/>
                <input type="text" value = {name} />
                <h2>{name}</h2>
                {sum(2,3)}
                <button onClick={()=>funcall("Amina")}>Click Here</button>
                {obj.name}
                <img src={path} />
                </>
        )
}
function Person(){
        return(
                <h1>Person name is Ali</h1>
        )
}
export default App
