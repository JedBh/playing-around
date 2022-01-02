import React from "react";
import ReactDOM from "react-dom";

// const clock = document.querySelector("#clock");
const root = document.querySelector("#root");

// const tick = () => {
//   const element = (
//     <div>
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
//   ReactDOM.render(element, clock);
// };

// components

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// class MyApp extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name="Gus" />
//         <Welcome name="Walter" />
//         <Welcome name="Jesee" />
//       </div>
//     );
//   }
// }

// const header = <MyApp />;

// ReactDOM.render(header, root);

// setInterval(tick, 1000);

const comment = {
  author: {
    name: "Jed Benhod",
    url: "https://avatars.githubusercontent.com/u/44101778?v=4",
  },
  text: "Hope you find React as helpful as it helped me!",
  date: "2/1/2022",
};

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{this.props.date}</div>
      </div>
    );
  }
}

class UserInfo extends React.Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.author.name}</div>
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.author.avatarUrl}
        alt={this.props.author.name}
      />
    );
  }
}

const element = <Comment author={comment} />;

ReactDOM.render(element, root);
