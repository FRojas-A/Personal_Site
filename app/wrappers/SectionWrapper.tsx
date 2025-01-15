"use client";
import { useEffect, ReactNode, Fragment } from "react";
import { useScroll } from "../contexts/ScrollContext";

interface SectionWrapperProps {
  name: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ name, children }) => {
  const { registerSection } = useScroll();

  useEffect(() => {
    registerSection(name);
  }, [name, registerSection]);

  return <Fragment>{children}</Fragment>;
};

export default SectionWrapper;
