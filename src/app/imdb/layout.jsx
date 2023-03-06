import SearchBox from "@/components/SearchBox";

export default function ImdbLayout({ children }) {
  return (
    <div>
      <SearchBox />
      {children}
    </div>
  );
}
