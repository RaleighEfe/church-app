import { BsArrowRight } from "react-icons/bs";
const SearchBar = () => {
  return (
    <form className="w-full max-w-md">
      <div className="relative flex items-center text-[#5EA49E] border border-[#5EA49E] rounded-md">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full pl-2 bg-transparent outline-none"
        />
        <button className="py-2 px-5 bg-[#5EA49E] text-white outline-none">
          <BsArrowRight size={20} color="white" />
        </button>
        {/* <BsSearch
      size={20}
      color=""
      className="absolute ml-3 pointer-events-none"
    /> */}
      </div>
    </form>
  );
};

export default SearchBar;
