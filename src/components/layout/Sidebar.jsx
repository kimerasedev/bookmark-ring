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
      <div className="px-4 py-5">
        <div className="flex justify-between items-center mb-5 text-text">
          <span className="font-bold text-2xl">LOGO</span>
          <button className="p-2 rounded-md hover:bg-bg">
            <PlusIcon size={20} weight="bold" />
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-7">
          <SidebarItem
            icon={BookmarkSimpleIcon}
            label="모든 북마크"
            count={12}
          />
          <SidebarItem icon={TrashIcon} label="휴지통" count={0} />
          <SidebarItem icon={GearIcon} label="설정" />
        </div>

        <div className="text-xs text-muted mb-1">카테고리</div>

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
