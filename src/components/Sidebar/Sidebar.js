import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <div>CATEGORIES</div>
      <nav>
        <ul>
          <li>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <a href="/help" target="_blank">
          Help
        </a>
        <a href="/terms" target="_blank">
          Terms
        </a>
      </div>
    </div>
  );
};
