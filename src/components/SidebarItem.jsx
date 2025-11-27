export default function SidebarItem({ icon: Icon, label, count = null }) {
  return (
    <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-bg">
      <div className="flex items-center text-text gap-2">
        <Icon size={16} />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-[11px] text-muted">{count}</span>
    </button>
  );
}
