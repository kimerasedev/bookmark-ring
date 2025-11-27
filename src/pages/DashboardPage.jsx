import Header from "../components/layout/Header";
import MainContent from "../components/layout/MainContent";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col ">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
