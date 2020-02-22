import React from "react";

function Random(props) {
  console.log("Random component Render");
  props.callme(23);
  return <div>Random Component</div>;
}

export default React.memo(Random); // React.memo prevent to rerender compoenent if props/state doesnot changes
