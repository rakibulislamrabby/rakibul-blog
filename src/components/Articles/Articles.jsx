import { useEffect, useState } from "react";
import Article from "../Article/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("article.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div className="pt-4">
      <h1 className="text-left text-4xl font-bold mb-6">Recent Articles..</h1>
      <div className="grid grid-cols-2 gap-10 ">
        {articles.map((article) => (
          <div className="w-full" key={article.id}>
            <Article article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
