import AddButton from "../AddButton";
import Searchbar from "../Searchbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-sidebar min-w-full h-18 border-b border-border px-6">
      <p className="font-semibold text-text text-xl">모든 북마크</p>
      <div className="flex items-center justify-center gap-3">
        <Searchbar />
        <AddButton />
      </div>
    </div>
  );
}
