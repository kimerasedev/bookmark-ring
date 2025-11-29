import { ArrowSquareOutIcon, FolderIcon } from "@phosphor-icons/react";

export default function BookmarkCardGrid({ title }) {
  return (
    <div className="w-full max-w-[385px] bg-bg border border-[#333333] rounded-md overflow-hidden">
      <img
        src="/images/dummy-thumbnail.jpg"
        className="w-full aspect-video object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <span className="font-semibold line-clamp-2 text-text">{title}</span>

        <div className="flex items-center text-muted text-sm gap-1">
          <FolderIcon size={14} />
          <span>개발</span>
          <div>・</div>
          <span>2025년 11월 26일</span>
        </div>
        <div className="flex items-center gap-1 text-muted text-sm line-clamp-1">
          <a
            href="https://ko.react.dev/"
            className="hover:underline underline-offset-2"
          >
            https://ko.react.dev/
          </a>
          <ArrowSquareOutIcon size={15} />
        </div>
      </div>
    </div>
  );
}
