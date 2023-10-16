'use client'
import { useState, createContext, useContext } from "react";

interface ContextType {
  isButtonClicked: boolean;
  setButtonClicked: (value: boolean) => void;
  isCardVisible: boolean;
  showCard: () => void;
  hideCard: () => void;
}

const MyContext = createContext<ContextType>(undefined as never);

export const useMyContext = () => useContext(MyContext);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);

  const showCard = () => {
    setCardVisible(true);
  };

  const hideCard = () => {
    setCardVisible(false);
  };

  return (
    <MyContext.Provider
      value={{ isButtonClicked, setButtonClicked, isCardVisible, showCard, hideCard }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
