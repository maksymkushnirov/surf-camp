import ArticleHeadline from "./ArticleHeadline";
import ArticleParagraph from "./ArticleParagraph";
import ImageTextComponent from "./ImageTextComponent";
import LandscapeImage from "./LandscapeImage";

const ArticleComponent = ({ component }) => {
  //   console.log(component);
  //   return <div>ArticleComponent</div>;

  const componentType = component.__component.split("blog-article.")[1];

  switch (componentType) {
    case "headline":
      //   return <h1>Headline!</h1>;
      return <ArticleHeadline headline={component} />;

    case "paragraph-with-image":
      //   return <h1>Here is a component Paragraph With Image</h1>;
      return <ImageTextComponent component={component} />;

    case "paragraph":
      //   return <h1>Paragraph Component</h1>;
      return <ArticleParagraph paragraph={component} />;

    case "landscape-image":
      //   return <h1>Landscape Image</h1>;
      return <LandscapeImage imageData={component} />;

    default:
      return <h1>Component not found</h1>;
  }
};

export default ArticleComponent;
