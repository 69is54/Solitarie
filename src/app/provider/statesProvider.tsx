"use client";
import { useState, createContext, useContext } from "react";

interface ContextType {
  isButtonClicked: boolean;
  setButtonClicked: (value: boolean) => void;
  isCardVisible: boolean;
  showCard: () => void;

  textContext: string;
  setTextContext: (value: string) => void;
}

const MyContext = createContext<ContextType>(undefined as never);

export const useMyContext = () => useContext(MyContext);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);
  const [textContext, setTextContext] = useState("");

  const showCard = () => {
    setCardVisible(true);
  };

  return (
    <MyContext.Provider
      value={{
        setTextContext,
        isButtonClicked,
        setButtonClicked,
        isCardVisible,
        showCard,
        textContext,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
