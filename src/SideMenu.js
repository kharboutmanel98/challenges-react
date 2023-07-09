/* eslint-disable jsx-a11y/alt-text */
import TagButton from "./TagButton";
import "./TagButtonStyle.css";

function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
      <TagButton title="Programming">
        <div>
         <img  style={{ width: "100px" } } src="https://media.istockphoto.com/id/1372132588/photo/beautiful-cafe-in-the-corner-of-a-side-street-in-paris-closed-with-chairs-on-the-table-during.jpg?s=1024x1024&w=is&k=20&c=0BmbON1_CjnwULRC8MTUxs33sLK_eoag2o6avtxQk68="/>
        </div>
      </TagButton>
      <TagButton title="data science">
        <div>
          <img src="https://media.istockphoto.com/id/1141055601/photo/pont-alexandre-iii-by-night-looking-towards-les-invalides-paris-france.jpg?s=1024x1024&w=is&k=20&c=ojF9twiq7vDL5xFXCMK7od1Cp-0ceVny4QXjbQSZa78="
            style={{ width: "100px" } }
          />
        </div>
      </TagButton>
      <TagButton title="Technology">
        <div>
          <span>😎😉😁</span>
        </div>
      </TagButton>
      <TagButton title="self improvement" />
      {/* <TagButton />
       <TagButton />
       <TagButton /> */}
    </div>
  );
}

export default SideMenu;
