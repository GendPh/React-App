export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-between items-center">
      <div className="content">
        <h5 className="heading-5">So, you want to travel to</h5>
        <h1 className="heading-2 text-white my-6">Space</h1>
        <p className="description">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <a href="#destination" id="home-button" className="subHeading-1">
        Explore
      </a>
    </section>
  );
}
