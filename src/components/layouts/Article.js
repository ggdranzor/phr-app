import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>DEMO11111</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
