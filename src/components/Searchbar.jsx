import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function Searchbar() {
  return (
    <div className="flex items-center gap-3 bg-bg w-72 px-4 py-2 rounded-md text-text">
      <MagnifyingGlassIcon size={16} />
      <input className="w-full text-sm" placeholder="북마크 검색" />
    </div>
  );
}
