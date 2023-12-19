import React from "react";
import "./articles.css";
import Article from "./article";
import allArticles from "../../data/all-articles";

const Articles = () => {
  return (
    <section id="articles">
      <h2 className="headerTitle"> Medium Articles </h2>
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
