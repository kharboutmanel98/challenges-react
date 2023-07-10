import TagButton from "./TagButton"
import "./TagButtonStyle.css"

function SideMenu() {

  const Subjects = [
    {
      id: 1, 
      title:"Programming",
      c: (
        <div>
           <span>😍😎😎</span>
      
        </div>
        ),
    },
    {
      id: 2, 
      title:"Software engineer",
      c: (
        <div>
           <span>😍😎😎</span>
      
        </div>
        ),
    },
    {
      id: 3, 
      title:"Cyber security",
      c: (
        <div>
           <span>😍😎😎</span>
      
        </div>
        ),
    },
   ];
  
const mySubjects = Subjects.map((cat) => {
  return <TagButton>{cat.title} {cat.c}</TagButton>
})
 
  return (
    <div style={{margin: "25px" , border: "solid #1d9bf0 5px"}}>

   {mySubjects}
  
       
    </div>
  )
}

export default SideMenu