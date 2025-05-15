import React from "react";
import Group7748 from "../images/Group 7748.svg";

interface SearchButtonProps {
  onClick?: () => void;
}

const SearchButton = ({ onClick } : SearchButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      type="button"
      className="flex items-center justify-center"
    >
      <img 
        src={Group7748} 
        alt="Search" 
        className="ml-2 cursor-pointer" 
        width={30}
        height={24}
      />
    </button>
  );
};

export default SearchButton;
