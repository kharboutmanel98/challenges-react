
import './App.css';
import Header from './Header';
import Post from "./Post";
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
     <Header />
  <div style={{display: "flex" , justifyContent: "center"}}>

   

     {/* POSTS & SIDE MENU CONTAINER */}
    <div style={{display: "flex", width:"60%", justifyContent:"center"}}>


         {/* POSTS CONTAINER  */}
      <div style={{width: "70%" }}>
            <Post postName= "Pingucoder" postBody="platform e learning"/>
            <Post postName= "Learn React" postBody="with pingucoder"/>
            <Post postName= "Learn ExpressJs" postBody="with pingucoder"/>
            <Post postName= "Learn Angular" postBody="with pingucoder"/>
            <Post />
            
            </div>
         {/* POSTS CONTAINER  */}
         {/* SIDE MENU CONTAINER */}
         <div style={{width: "30%", marginTop:"25px"}}>
          <SideMenu />
         </div>
         {/* SIDE MENU CONTAINER */}
      </div>
      {/* POSTS & SIDE MENU CONTAINER */}

    </div>
  </div>


    
  );
}

export default App;
