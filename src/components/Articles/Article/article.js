import React, { useEffect, useState } from "react";
import "./article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
  const { date, title, teaser, link } = props;

  const [isNarrowScreen, setIsNarrowScreen] = useState(
    window.matchMedia("(max-width: 500px)").matches
  );

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const teaserText = truncateText(teaser, 200);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleResize = (e) => setIsNarrowScreen(e.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <>
      {isNarrowScreen ? (
        <div className="article">
          <div className="article-right">
            <a href={link}>
              <h3 className="article-title">{title}</h3>
              <p className="article-date">{date}</p>
              <p className="article-teaser">{teaserText}</p>
              <div className="article-link">
                Read Article{" "}
                <FontAwesomeIcon
                  className="article-icon"
                  icon={faChevronRight}
                />
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="article">
          <div className="article-left">
            <p className="article-date">{date}</p>
          </div>

          <div className="article-right">
            <a href={link}>
              <h3 className="article-title">{title}</h3>
              <p className="article-teaser">{teaserText}</p>
              <div className="article-link">
                Read Article{" "}
                <FontAwesomeIcon
                  className="article-icon"
                  icon={faChevronRight}
                />
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
