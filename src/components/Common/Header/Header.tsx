import * as React from "react";
import Hero from "../../Backgrounds/Hero2";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <div id="header">
      <div className="overlay">
        <Hero />
      </div>
      <div className="container">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
