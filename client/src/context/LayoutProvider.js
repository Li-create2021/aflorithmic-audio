import { useState, createContext } from "react";

export const LayoutContext = createContext();

const LayoutProvider = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider };
