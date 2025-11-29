import {
  BookmarkSimpleIcon,
  FolderIcon,
  GearIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import SidebarItem from "../SidebarItem";
import UserProfile from "../UserProfile";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between bg-sidebar w-64 min-h-screen border-r border-border">
      <div className="px-3 py-5">
        <div className="flex items-center mb-5 text-text">
          <div className="flex items-center justify-center gap-2">
            <img src="./icons/logo.svg" className="w-8" />
            <span className="mt-1 text-[22px] font-logo text-primary font-bold">
              북마크온
            </span>
          </div>
          {/* <button className="p-2 rounded-md hover:bg-bg">
            <PlusIcon size={18} weight="bold" />
          </button> */}
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <SidebarItem
            icon={BookmarkSimpleIcon}
            label="모든 북마크"
            count={12}
          />
          <SidebarItem icon={TrashIcon} label="휴지통" count={0} />
          <SidebarItem icon={GearIcon} label="설정" />
          <SidebarItem icon={PlusIcon} label="추가" />
          <hr className="text-border mt-3" />
        </div>

        <div className="text-[13px] font-semibold text-muted mb-2">
          카테고리
        </div>

        {/* 임시 카테고리 */}
        <div className="flex flex-col gap-1">
          <SidebarItem icon={FolderIcon} label="개발" count={12} />
          <SidebarItem icon={FolderIcon} label="영어 공부" count={6} />
          <SidebarItem icon={FolderIcon} label="디자인" count={21} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
          <SidebarItem icon={FolderIcon} label="자기계발" count={12} />
        </div>
      </div>

      <div className="fixed bottom-0">
        <UserProfile />
      </div>
    </aside>
  );
}
