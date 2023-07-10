
import './App.css';
import Header from './Header';
import Post from "./Post";
import SideMenu from './SideMenu';

function App() {


  const posts = [
    { id: 1 , postName: "Pingucoder" , postBody: "platform e learning"},
    { id: 2 , postName: "Learn React" , postBody: "with pingucoder"},
    { id: 3 , postName: "Learn ExpressJs" , postBody: "with pingucoder"},
    { id: 4 , postName: "Learn Angular" , postBody: "with pingucoder"},
    { id:'', postName:'', postBody:''},
  ];
  
   
  
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* POSTS & SIDE MENU CONTAINER */}
        <div
          style={{ display: "flex", width: "60%", justifyContent: "center" }}
        >
          {/* POSTS CONTAINER  */}
          <div style={{ width: "70%" }}>
            {posts.map((post, index) => (
              <Post key={index} postName={post.postName} postBody={post.postBody} />

            ) )}

          </div>
          {/* POSTS CONTAINER  */}
          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%", marginTop: "25px" }}>
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
