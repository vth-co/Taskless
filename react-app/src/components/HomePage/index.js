import Split from "react-split";
import Content from "../Content";
import Sidebar from "../Sidebar";

import "./HomePage.css";

function HomePage() {
  return (
    <Split
      sizes={[15, 85]}
      minSize={[250, 2000]}
      direction="horizontal"
      cursor="col-resize"
      className="split-flex"
    >
      <Sidebar />
      <Content />
    </Split>
  );
}

export default HomePage;
