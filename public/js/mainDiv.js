"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

const domContainer = document.querySelector("#main_div");
ReactDOM.render(e(LikeButton), domContainer);
