import { extractImageUrl } from "@/utils/strapi.utils";

const LandscapeImage = ({ imageData }) => {
  console.log(imageData);
  const { imageCaption, image } = imageData;

  //   console.log(imageData);

  //   return null;

  return (
    <div className="article-image">
      <img src={extractImageUrl(image)} alt="" />
      {imageCaption && (
        <p className="copy article-image__caption copy-small">{imageCaption}</p>
      )}
    </div>
  );
};

export default LandscapeImage;
