import{useEffect,useState} from "react"
import FirstCompo from "./FirstCompo";

function App() {
  const [categories, setcategories] = useState([]);
  const[loading,setloading]=useState(false)
 // useEffect(()=>{
   // fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    //.then(data=>data.json())
    //.then(data=>setcategories(data.categories))
    //.catch(crr=>console.log("err"))
  //},[])
  function Show(){
    setloading(true)
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data=>data.json())
    .then(data=>{
      setcategories(data.categories)
      setloading(false)
    .catch(crr=>console.log("err"))
    })
  }
  function Hide(){
    setcategories([])
  }

  return (
    
      <div>
        <button onClick={Show}>Show Items</button>
        <button onClick={Hide}>Hide Items</button>
        
        <h1>length{categories.length}</h1>
        {
          loading ? <p>loading....</p>:
        categories.map(data=><FirstCompo key={data.idCategory}data={data}/>)}
      </div>
      
  )
}

export default App
