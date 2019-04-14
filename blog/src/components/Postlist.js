import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Userheader from "./Userheader";

class Postlist extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      if (!post) return null;
      return (
        <div className="item" key={post.id}>
          <i className="large middle alligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Userheader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Postlist);
