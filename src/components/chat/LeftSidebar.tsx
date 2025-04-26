
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface LeftSidebarProps {
  showCallHistory: boolean;
  setShowCallHistory: (show: boolean) => void;
}

const LeftSidebar = ({ showCallHistory, setShowCallHistory }: LeftSidebarProps) => {
  return (
    <div className="w-[72px] border-r border-gray-100 bg-[#f8f9fa] flex flex-col items-center py-4">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col items-center w-full px-3 space-y-4">
          <Button variant="ghost" className="w-8 h-8 hover:bg-gray-100 !rounded-button whitespace-nowrap">
            <i className="fas fa-bars text-gray-500"></i>
          </Button>
          <div className="relative">
            <Button variant="ghost" className="w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap">
              <i className="far fa-comment-dots text-gray-500 text-xl"></i>
            </Button>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          className={`w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap ${
            showCallHistory ? "bg-gray-100" : ""
          }`}
          onClick={() => setShowCallHistory(!showCallHistory)}
        >
          <i className="fas fa-phone text-gray-500 text-xl"></i>
        </Button>
        <Button variant="ghost" className="w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap">
          <i className="fas fa-compass text-gray-500 text-xl"></i>
        </Button>
        <Button variant="ghost" className="w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap">
          <i className="far fa-star text-gray-500 text-xl"></i>
        </Button>
        <Button variant="ghost" className="w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap">
          <i className="far fa-calendar text-gray-500 text-xl"></i>
        </Button>
      </div>
      <div className="mt-auto">
        <Button variant="ghost" className="w-12 h-12 rounded-xl hover:bg-gray-100 !rounded-button whitespace-nowrap">
          <i className="fas fa-cog text-gray-500 text-xl"></i>
        </Button>
        <div className="mt-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20man%20with%20friendly%20smile%20wearing%20casual%20business%20attire%20against%20neutral%20background%2C%20high%20quality%20portrait&width=40&height=40&seq=20&orientation=squarish" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
