const ArticleHeadline = ({ headline }) => {
  //   return null;

  console.log(headline);

  return (
    <h3 className="article-headline" id={headline.slug}>
      {headline.headline}
    </h3>
  );
};

export default ArticleHeadline;
