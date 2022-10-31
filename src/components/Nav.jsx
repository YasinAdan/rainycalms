import React from "react";
import logo from "../assets/logo.png";
import { Contact } from "./Contact";


export default function Nav() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <span>
            <img src={logo} alt="logo image" />
          </span>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </nav>
    <div className="wave"></div>
    </>
  );
}
