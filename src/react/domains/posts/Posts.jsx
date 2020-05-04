import React from "react";
import { Link } from "react-router-dom";

import usePosts from "./usePosts";
import { readableDate } from "../../foundation/utils/helpers";
import "./Posts.css";

export default function Posts() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;

    return posts.map((post) => (
      <Link className="posts__post" key={post.fields.slug} to={`/posts/${post.fields.slug}`}>
        <div className="posts__post__img__container">
          <img
            className="posts__post__img__container__img"
            src={post.fields.featuredImage.fields.file.url}
            alt={post.fields.title}
          />
        </div>
        <small>{readableDate(post.fields.date)}</small>
        <h3 className="posts__post__title">{post.fields.title}</h3>
        <p>{post.fields.description}</p>
      </Link>
    ));
  };

  return (
    <div className="posts__container">
      <div className="posts">{renderPosts()}</div>
    </div>
  );
}
