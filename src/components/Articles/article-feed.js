import React from "react";
import "./articles.css";
import Article from "./article";

const Articles = () => {
  return (
    <section id="articles">
      <h2 className="headerTitle"> Medium Articles </h2>
      <div className="articles-wrapper">
        <Article
          date="7 May 2023"
          title="SomeTitle"
          teaser="This is a teaser"
          link="https://github.com/Medium/medium-api-docs"
        />
        <Article
          date="7 May 2023"
          title="SomeTitle"
          teaser="This is a teaser"
          link="https://github.com/Medium/medium-api-docs"
        />
        <Article
          date="7 May 2023"
          title="SomeTitle"
          teaser="This is a teaser"
          link="https://github.com/Medium/medium-api-docs"
        />
      </div>
    </section>
  );
};

export default Articles;
