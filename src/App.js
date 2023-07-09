
import './App.css';
import Header from './Header';
import Post from "./Post";
import SideMenu from './SideMenu';

const showCategories = true;

function App() {

  return (
    <div className="App">
     <Header />
  <div style={{display: "flex" , justifyContent: "center"}}>

   

     {/* POSTS & SIDE MENU CONTAINER */}
    <div style={{display: "flex", width:"60%", justifyContent:"center"}}>


         {/* POSTS CONTAINER  */}
      <div style={{width: "70%" }}>
            <Post postName= "Pingucoder" postBody="platform e learning">
            </Post>
            <Post postName= "Learn React" postBody="with pingucoder"/>
            <Post postName= "the third post" postBody="with pingucoder"/>     
      </div>
         {/* POSTS CONTAINER  */}
         {/* SIDE MENU CONTAINER */}
         <div style={{width: "30%", marginTop:"25px"}}>
           <AppSideMenu />
         </div>
         {/* SIDE MENU CONTAINER */}
      </div>
      {/* POSTS & SIDE MENU CONTAINER */}

    </div>
  </div>
     

    
  );
}
function AppSideMenu(){
  if(showCategories == true) {
return (<SideMenu />);
  }else
  return null
}

export default App;
