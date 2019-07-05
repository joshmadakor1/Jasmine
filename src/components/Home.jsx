import React, { Component } from "react";
/*const verticalAlignStyle = {
  margin: "0",
  position: "absolute",
  top: "75%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  border: "1px solid black",
  padding: "20px",
  borderRadius: "5px",
  background: "lightgrey"
};*/

const verticalAlignStyle = {
  margin: "0",
  top: "50%",
  left: "50%",
  padding: "20px",
  borderRadius: "5px"
};
const homepageMainTextStyle = {
  fontWeight: "bold",
  color: "#d94949",
  textShadow:
    "-1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000",
  fontSize: "44pt"
};
const homepageSubTextStyle = {
  fontWeight: "bold",
  color: "#d94949",
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  fontSize: "22pt"
};
class Home extends Component {
  state = {};
  render() {
    return (
      <table className="table my-5 table-striped">
        <tr>
          <td>
            <div style={verticalAlignStyle}>
              <h1 style={homepageMainTextStyle}>Kirkland's Mediterranean</h1>
              <h3 style={homepageSubTextStyle}>
                Halal, Healthy, Simply Delicious.
              </h3>
            </div>
          </td>
        </tr>
        <tr>
          <td />
          <td />
        </tr>
      </table>
    );
  }
}

export default Home;