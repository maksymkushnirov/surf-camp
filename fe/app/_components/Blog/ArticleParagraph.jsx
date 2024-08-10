import ReactMarkdown from "react-markdown";

const ArticleParagraph = ({ paragraph }) => {
  // return null;

  return (
    <ReactMarkdown className="copy article-paragraph">
      {paragraph.paragraph}
    </ReactMarkdown>
  );
};

export default ArticleParagraph;
