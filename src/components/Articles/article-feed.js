import React from "react";
import "./articles.css";
import Article from "./article";

const Articles = () => {
  return (
    <section id="articles">
      <h2 className="headerTitle"> Medium Articles </h2>
      <div className="articles-wrapper">
        <Article
          date=""
          title=""
          teaser="
          "
          link=""
        />
      </div>
    </section>
  );
};

export default Articles;
