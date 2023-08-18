import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <div>
      <div>CATEGORIES</div>
      <nav>
        <ul>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                // className={({ isActive }) =>
                //   `${isActive}`
                //     ? (style = { сolor: "#44014C" })
                //     : (style = { сolor: "ffffff" })
                // }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
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
