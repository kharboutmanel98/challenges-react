import TagButton from "./TagButton"
import "./TagButtonStyle.css"

function SideMenu() {
  return (
    <div style={{margin: "25px" , border: "solid #1d9bf0 5px"}}>
       <TagButton />
       <TagButton />
       <TagButton />
       <TagButton />
       <TagButton />
    </div>
  )
}

export default SideMenu