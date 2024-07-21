import Link from "next/link";

const HighlightArticle = ({ data }) => {
    const { headline, excerpt, slug, featuredImage) = data;  return (
    <article className="highlight-article">
      <div className="highlight-article-info">
        <h3>Headline</h3>
        <p className="copy">Some Text</p>
        <Link className="btn btn--medium btn--turquoise" href="/blog/slug">
          Read more
        </Link>
      </div>
      <img src="/assets/hero-experience.png" alt="" />
    </article>
  );
};

export default HighlightArticle;
