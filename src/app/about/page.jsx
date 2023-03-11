export default function About() {
  return (
      <div className="max-w-6xl mx-auto space-y-4 p-4 mt-2">
        <div className="text-xl whitespace-normal break-words overflow-wrap-word">
          <p>
            Full code for this project you can find at this link{" "}
            <span className="sm:text-2xl text-amber-600 font-medium">
              <a
                href="https://github.com/DanielBojchovski/portfolio"
                className="underline"
              >
                https://github.com/DanielBojchovski/portfolio
              </a>
            </span>{" "}
            and here's link to my Github profile{" "}
            <span className="sm:text-2xl text-amber-600 font-medium">
              <a
                href="https://github.com/DanielBojchovski"
                className="underline"
              >
                https://github.com/DanielBojchovski
              </a>
            </span>{" "}
            where you can find more of my projects. Also here's link to my
            youtube channel{" "}
            <span className="sm:text-2xl text-amber-600 font-medium">
              <a
                href="https://www.youtube.com/@daniel49245/videos"
                className="underline"
              >
                https://www.youtube.com/@daniel49245/videos
              </a>
            </span>
            .
          </p>
          <br />
          <p>
            Here are some of the technologies and tools I have experience in:
          </p>
          <br />
          <br />
          <h3>Javascript:</h3>
          <ul className="list-disc list-inside">
            <li>
              Next.js 13{" "}
              <span className="text-xl text-amber-600 font-medium">
                (used for this project)
              </span>
            </li>
            <li>Angular 13+</li>
          </ul>
          <br />
          <h3>C#:</h3>
          <ul className="list-disc list-inside">
            <li>
              .NET (MAUI, WPF, Win Forms, Web Forms, ASP.NET, .NET Core API, Uno
              Platform)
            </li>
          </ul>
          <br />
          <h3>CSS:</h3>
          <ul className="list-disc list-inside">
            <li>
              Tailwind{" "}
              <span className="text-xl text-amber-600 font-medium">
                (used for this project)
              </span>
            </li>
            <li>Bootstrap</li>
          </ul>
          <br />
          <h3>Backend solutions:</h3>
          <ul className="list-disc list-inside">
            <li>
              Firebase{" "}
              <span className="text-xl text-amber-600 font-medium">
                (used for this project)
              </span>
            </li>
            <li>Pocketbase</li>
          </ul>

          <br />
          <p>
            If you're interested in working with me or just want to chat, feel
            free to send me an email at{" "}
            <span className="text-xl text-amber-600 font-medium">
              danielb92@hotmail.com
            </span>
            .
          </p>
        </div>
      </div>
  );
}
