const Buttons = ({ type, onclick, disabled, children }) => {
  switch (type) {
    case "filled":
      return (
        <button
          className="bg-primary px-5 py-2 rounded-md text-white text-sm md:text-base"
          onclick={onclick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          className="border border-primary px-5 py-2 rounded-md text-primary text-base"
          onclick={onclick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "white-outline":
      return (
        <button
          className=" border border-white px-5 py-2 rounded-md text-white text-base"
          onclick={onclick}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};

export default Buttons;
