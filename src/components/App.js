import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";
import Post from "./Post/Post";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      text: "",
    };

    // this.updatePost = this.updatePost.bind( this );
    // this.deletePost = this.deletePost.bind( this );
    // this.createPost = this.createPost.bind( this );
  }

  updateState = (newPosts) => {
    this.setState({ posts: newPosts });
  };
  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/api/posts")
      .then((results) => this.setState({ posts: results.data }))
      .catch((e) => console.log(e));
  }

  updatePost = (id, text) => {
    // const {id} = this.state
    // const {text} = this.state
    axios
      .put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text })
      .then((results) => {
        this.setState({ posts: results.data });
      })
      .catch((e) => console.log(e));
  };

  deletePost = (id) => {
    axios
      .delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then((response) => {
        if (response.data !== null) {
          this.setState({
            posts: this.state.posts.filter((post) => post.id !== id),
          });
          console.log(response);
        }
      })
      .catch((e) => console.log(e));
  };

  createPost(text) {
    axios
      .post("https://practiceapi.devmountain.com/api/posts", { text })
      .then((results) => {
        this.setState({ posts: results.data });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map((post) => (
            <Post
              key={post.id}
              text={post.text}
              date={post.date}
              id={post.id}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
