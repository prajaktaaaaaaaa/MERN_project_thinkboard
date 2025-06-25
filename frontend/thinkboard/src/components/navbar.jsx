import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b-base-content/10">
      <div className="mx-auto max-w-7xl px-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
            Thinkboard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="sizze-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
