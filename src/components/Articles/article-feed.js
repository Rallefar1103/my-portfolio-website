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
          title="Why code ownership is BAD and constructive feedback is KING in software developmen"
          teaser="Deployed a Flutter app globally to 2500 customers in 15+ countries, streamlining a once manual robot base station setup into a digital process.

          Designed and developed sports geometric layouts for games like Soccer, American Football, Lacrosse and many more, strictly adhering to the official rules of sports federations with inch-perfect accuracy for 2500 global customers. 
          
          Enhanced the layout engine codebase quality by refactoring classes and methods, reducing lines of code by ≈30% leading to a faster delivery of new layouts.
          "
          link="https://github.com/Medium/medium-api-docs"
        />
        <Article
          date="7 May 2023"
          title="I did Test-Driven-Development for six months on a project, this is how it went"
          teaser="Deployed a Flutter app globally to 2500 customers in 15+ countries, streamlining a once manual robot base station setup into a digital process.

          Designed and developed sports geometric layouts for games like Soccer, American Football, Lacrosse and many more, strictly adhering to the official rules of sports federations with inch-perfect accuracy for 2500 global customers. 
          
          Enhanced the layout engine codebase quality by refactoring classes and methods, reducing lines of code by ≈30% leading to a faster delivery of new layouts.
          "
          link="https://github.com/Medium/medium-api-docs"
        />
        <Article
          date="7 May 2023"
          title="The best way to refactor your code for better readability and maintainability"
          teaser="Deployed a Flutter app globally to 2500 customers in 15+ countries, streamlining a once manual robot base station setup into a digital process.

          Designed and developed sports geometric layouts for games like Soccer, American Football, Lacrosse and many more, strictly adhering to the official rules of sports federations with inch-perfect accuracy for 2500 global customers. 
          
          Enhanced the layout engine codebase quality by refactoring classes and methods, reducing lines of code by ≈30% leading to a faster delivery of new layouts.
          "
          link="https://github.com/Medium/medium-api-docs"
        />
      </div>
    </section>
  );
};

export default Articles;
