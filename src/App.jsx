import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
let data=imageData();
return(
  <div>
    <h1>Kalvium gallery</h1>
    <div className="images">
      {data.map(ele=>(
        <div>
         <img src={ele.img} alt={ele.id} key={ele.id}/>
         </div>
      ))}
    </div>
  </div>
)
}

export default App;
