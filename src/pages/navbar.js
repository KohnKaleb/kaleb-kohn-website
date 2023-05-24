import * as React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <a href="https://www.linkedin.com/in/kaleb-kohn-2a1b3622b/">
          <img src="..\images\linkedin_icon.png" alt="linkedin icon"></img>
        </a>
        <a href="https://github.com/KohnKaleb">
          <img src="../images/github_icon.png" alt="github icon"></img>
        </a>
      </div>
    );
  }
}

export default NavBar;
