import { PlusIcon } from "@phosphor-icons/react";

export default function AddButton() {
  return (
    <div className="flex items-center justify-center gap-2 bg-primary px-5 py-2 rounded-md text-sidebar hover:brightness-105">
      <PlusIcon size={16} weight="bold" />
      <span className="font-semibold text-[15px]">추가</span>
    </div>
  );
}
