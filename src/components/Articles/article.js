import React from "react";
import "./article.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
  const { date, title, teaser, link } = props;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const teaserText = truncateText(teaser, 200);

  return (
    <div className="article">
      <div className="article-left">
        <div className="article-date">{date}</div>
      </div>

      <Link to={link}>
        <div className="article-right">
          <div className="article-title">{title}</div>
          <div className="article-teaser">{teaserText}</div>
          <div className="article-link">
            Read Article{" "}
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronRight}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;
