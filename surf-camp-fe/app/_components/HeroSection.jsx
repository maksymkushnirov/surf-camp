import Link from "next/link";

const HeroSection = ({ imgSrc, headline, theme = "turquise" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc || "/assets/hero-home.png"} alt="" />
      </div>
      <div className={`hero-headline hero__headline--${theme}`}>{headline}</div>
      <button className={`btn btn--medium btm--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>
      <img
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
      />
    </section>
  );
};
export default HeroSection;
