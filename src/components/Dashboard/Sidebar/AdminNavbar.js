
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {

    return (
      <nav className="bg-blue-500 md:ml-64 py-6 px-3">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className="md:hidden">
            <button
              onClick={() => setShowSidebar("left-0")}
            >
              <AiOutlineMenu/>
            </button>
            <div
              className={`absolute top-2 md:hidden ${
                showSidebar === "left-0" ? "left-64" : "-left-64"
              } z-50 transition-all duration-300`}
            >
              <button
                onClick={() => setShowSidebar("-left-64")}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}
