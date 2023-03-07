export default function Header(props) {
  return (
    <div className="grid justify-items-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-cyan-300">
        { props.text }
      </h1>
    </div>
  );
}
