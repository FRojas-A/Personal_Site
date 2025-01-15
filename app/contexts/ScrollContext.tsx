"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { scrollTo } from "../utils/utils";

interface ScrollContextProps {
  registerSection: (key: string) => void;
  scrollToSection: (key: string) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a Scroll Provider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const registerSection = (key: string) => {
    if (targetSection === key) {
      scrollTo(targetSection);
      setTargetSection(null);
    }
  };
  const scrollToSection = (key: string) => {
    setTargetSection(key);
  };

  return (
    <ScrollContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
