import { SignOutIcon } from "@phosphor-icons/react";

export default function UserProfile() {
  return (
    <div className="w-64 flex items-start justify-between p-4 bg-bg border-r border-border rounded-t-2xl">
      <div className="flex items-center gap-2">
        <img
          src="./images/dummy-avatar.jpg"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm text-text">Guest</span>
          <span className="text-xs text-muted">guest@example.com</span>
        </div>
      </div>
      <SignOutIcon size={16} className="text-text cursor-pointer" />
    </div>
  );
}
