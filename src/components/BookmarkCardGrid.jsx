import { ArrowSquareOutIcon, FolderIcon } from "@phosphor-icons/react";

export default function BookmarkCardGrid({ title }) {
  return (
    <div className="w-full max-w-[360px] bg-bg border border-[#333333] rounded-md overflow-hidden">
      <img
        src="/image/dummy-thumbnail.jpg"
        className="w-full aspect-video object-cover"
      />
      <div className="px-3 py-2 flex flex-col gap-1">
        <span className="font-semibold line-clamp-2 text-text">{title}</span>

        <div className="flex items-center text-text text-[13px] gap-1">
          <FolderIcon size={14} />
          <span>개발</span>
          <div>・</div>
          <span>2025년 11월 26일</span>
        </div>
        <div className="flex items-center gap-2 text-muted text-[13px] line-clamp-1">
          <a
            href="https://ko.react.dev/"
            className="hover:underline underline-offset-2"
          >
            https://ko.react.dev/
          </a>
          <ArrowSquareOutIcon size={14} />
        </div>
      </div>
    </div>
  );
}
