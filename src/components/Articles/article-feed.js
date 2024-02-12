import React from "react";
import "./articles.css";
import Article from "./Article/article";
import allArticles from "../../data/all-articles";

const Articles = () => {
  return (
    <section id="articles">
      <h2 className="blog-header">
        {" "}
        My Tech <span className="blog-yellow">Blog</span>{" "}
      </h2>
      <div className="articles-wrapper">
        {allArticles.map((article, index) => (
          <Article
            key={index}
            date={article.date}
            title={article.title}
            teaser={article.teaser}
            link={article.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
