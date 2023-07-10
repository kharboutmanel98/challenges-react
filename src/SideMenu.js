import TagButton from "./TagButton"
import "./TagButtonStyle.css"

function SideMenu() {

  const Subjects = [
    {id: 1, title:"Programming", span:"😍😎😍"},
    {id: 2, title:"data science"},
    {id: 3, image:""},
    {id: 5, title:"Technology"},
    {id: 6, title:"self improvement" , span:"😎❤😁"},
  ];

 
  return (
    <div style={{margin: "25px" , border: "solid #1d9bf0 5px"}}>

    {Subjects.map((subject, index) => (
      <TagButton key={index} title={subject.title} image={subject.image} span={subject.span} />
   ) )}
       {/* <TagButton title="Programming">
        <div>
          <span>😍😍😍</span>
        </div>
       </TagButton>
       <TagButton title="data science">
        <div>
          <img style={{width:"100px"}} src="https://plus.unsplash.com/premium_photo-1674929041876-8c58c0a3f772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        </div>
       </TagButton>
       <TagButton title="Technology">

       <div>
        <span>😎😉😁</span>
       </div>
      </TagButton>
       <TagButton title="self improvement" /> */}
       {/* <TagButton />
       <TagButton />
       <TagButton /> */}
    </div>
  )
}

export default SideMenu