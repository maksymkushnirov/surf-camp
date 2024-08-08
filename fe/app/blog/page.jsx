import axios from "axios";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  // const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");
  // const resonse = await axios.get(
  //   "http://127.0.0.1:1337/api/blog-articles?populate=deep"
  // );

  // console.log(response);

  const data = await fetchBlogArticles();

  // console.log(data);

  // write different queries: first one to find the highlight blog article
  // find the articles that are not highlight articles but sorted by publishing date.

  // console.log(blogData[0].attributes.featuredImage);

  // console.log(
  //   blogData.map((article) => ({
  //     ...article.attributes,
  //     id: article.id,
  //     featuredImage: article.attributes.featuredImage.data.attributes.url,
  //   }))
  // );

  // const highlightArticleData = {
  //   headline: "3 tips for a super fast takeoff",
  //   excerpt: (
  //     <>
  //       Improving your take-off phase in surfing is a fundamental step toward
  //       riding waves with more confidence and style. Improving your take-off
  //       phase is a gradual process, and it may take time to master. Be patient,
  //       stay committed to practice, and enjoy the journey of becoming a better
  //       surfer. With dedication and persistence, you'll see progress and have
  //       more enjoyable rides. Here is how:
  //     </>
  //   ),
  //   slug: "takeoff",
  //   featuredImage: "/assets/hero-experience.png",
  // };

  // const featuredArticlesData = [
  //   {
  //     headline:
  //       "surfboard shaping let us use proper words to lengthen this headlline and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  //   {
  //     headline:
  //       "surfboard shaping and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  //   {
  //     headline:
  //       "surfboard shaping and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  //   {
  //     headline:
  //       "surfboard shaping and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  //   {
  //     headline:
  //       "surfboard shaping and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  //   {
  //     headline:
  //       "surfboard shaping and design behind the scenes of crafting the perfect board ",
  //     slug: "/blog/whatever",
  //     date: "Monday, June 05, 2023",
  //     featuredImage: "/assets/hero-experience.png",
  //   },
  // ];

  // ~~~~~~
  // write different queries:
  // 1) to find the highlighted blog article;
  // 2) to find the articles that are not highlighted but sorted by publishing date.

  const highlightArticleData = data.find(
    (article) => article.isHighlightArticle
  );

  const featuredArticlesData = data.filter(
    (article) => !article.isHighlightArticle
  );

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}

export const revalidate = 300;
