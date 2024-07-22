import Link from "next/link";

const HighlightArticle = ({ data }) => {
  const { headline, excerpt, slug, featuredImage } = data;
  return (
    <article className="highlight-article">
      <div className="highlight-article-info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--medium btn--turquoise" href={`/blog/${slug}`}>
          Read more
        </Link>
      </div>
      <img src={featuredImage} alt="" />
    </article>
  );
};

export default HighlightArticle;
