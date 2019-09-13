import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { BallSpinner } from "react-spinners-kit";

import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <BallSpinner loading={loading} />
  ) : (
    <Fragment>
      <h1 class="large text-primary">Posts</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Welcome to the community
      </p>
      {/* TODO PostForm */}
      <div className="posts">
          {posts.map(post => (
              <PostItem key={post._id} post={post} />
          ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
