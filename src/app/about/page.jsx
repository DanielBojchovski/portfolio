import { SiLinkedin } from "react-icons/si";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4 mt-2">
      <div className="text-xl whitespace-normal break-words overflow-wrap-word">
        <p>
          Full code for this project you can find at this link&nbsp;
          <span className="sm:text-2xl text-amber-600 font-medium">
            <a
              href="https://github.com/DanielBojchovski/portfolio"
              className="underline"
            >
              https://github.com/DanielBojchovski/portfolio
            </a>
          </span>
          &nbsp; and here&apos;s link to my Github profile&nbsp;
          <span className="sm:text-2xl text-amber-600 font-medium">
            <a href="https://github.com/DanielBojchovski" className="underline">
              https://github.com/DanielBojchovski
            </a>
          </span>
          &nbsp; where you can find more of my projects. Also here&apos;s link
          to my youtube channel&nbsp;
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
        <p>Here are some of the technologies and tools I have experience in:</p>
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
            Tailwind&nbsp;
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
            Firebase&nbsp;
            <span className="text-xl text-amber-600 font-medium">
              (used for this project)
            </span>
          </li>
          <li>Pocketbase</li>
        </ul>
        <br />
        <h3>Python:</h3>
        <ul className="list-disc list-inside">
          <li>Anvil</li>
        </ul>
        <br />
        <p>
          If you&apos;re interested in working with me or just want to chat,
          feel free to send me an email at&nbsp;
          <span className="text-xl text-amber-600 font-medium">
            danielb92@hotmail.com
          </span>
          , or contact me on&nbsp;
          <a
            href="https://www.linkedin.com/in/danielbojchovski/"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <SiLinkedin size={32} />
          </a>
        </p>
      </div>
    </div>
  );
}
