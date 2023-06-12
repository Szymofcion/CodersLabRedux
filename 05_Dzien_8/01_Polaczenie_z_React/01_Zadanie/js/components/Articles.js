import React from "react";
import ArticleInput from "./ArticleInput";
import UsersList from "./UsersList";
import ArticlesList from "./ArticlesList";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../redux/actions";

const Articles = () => {
  const dispatch = useDispatch();
  const { users, articles } = useSelector((state) => state);
  const onAdd = (article) => dispatch(addArticle(article));
  return (
    <div>
      <ArticleInput users={users} onArticleAdd={onAdd} />
      <UsersList users={users} />
      <ArticlesList articles={articles} />
    </div>
  );
};
export default Articles;
