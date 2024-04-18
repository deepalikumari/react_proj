import './App.css';
import imageData from './components/DataComponent';

function App(){
  const images=imageData.map((item)=>{
    return <img  key={item.id} id={item.id} className="img1" src={item.img}></img>
  })
 return <>
        <div className="h1Cont"><h1>Kalvium gallary</h1></div>
        <div className="imgcont">{images}</div>
        </>
 
}

export default App;
