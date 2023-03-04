export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-6xl mx-auto space-y-4 p-4 ">
        <h1 className="text-4xl font-medium text-amber-600">Hi there,</h1>
        <div className="text-xl">
          <p>
            I'm Daniel, a{" "}
            <span className="text-3xl text-amber-600 font-medium">
              Software Developer
            </span>{" "}
            based in Skopje, Macedonia. I have a passion for building beautiful
            and user-friendly applications, and I have hands-on experience in
            developing various types of software.
          </p>
          <br />
          <p>
            As examples, you can find links to some of my applications,
            including an{" "}
            <span className="text-2xl text-amber-600 font-medium">
              IMDB app, a ToDo app and a Credit/Loan Calculator
            </span>{" "}
            in the navigation bar of this website.
          </p>
          <br />
          <p>
            I have a solid understanding of both front-end and back-end
            development, and I'm excited to put my skills to use in a
            professional setting. As a{" "}
            <span className="text-2xl text-amber-600 font-medium">
              quick learner and a team player
            </span>
            , I am confident that I can be a valuable asset to any software
            development team.
          </p>
        </div>
      </div>
    </div>
  );
}
