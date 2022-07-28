import React, { useState } from "react";

export const Day1 = () => {
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div>
        <h1>Dia 1</h1>
      </div>
      <div className="frame">
        <div className={sidebar ? `card show-menu` : "card"}>
          <div className="heading">
            <div
              onClick={() => setSidebar((prevState) => !prevState)}
              className="menu-icon"
            >
              <div className="dash-top"></div>
              <div className="dash-bottom"></div>
              <div className="circle"></div>
            </div>

            <span className="title">Notifications</span>
            <input
              type="text"
              className={search ? `search-input active` : "search-input"}
              placeholder="Search ..."
            />
            <div
              onClick={() => setSearch((prevState) => !prevState)}
              className="fa fa-search search-icon"
            ></div>
          </div>

          <div className="notifications clearfix">
            <div className="line"></div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">9:24 AM</span>
              <p>
                <b>Chris Gabriels</b> posted a photo on your wall.
              </p>
            </div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">8:49 AM</span>
              <p>
                <b>Shawn Michael</b> posted a photo on your wall.
              </p>
            </div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">Yesterday</span>
              <p>
                <b>June Marie</b> added you as a friend.
              </p>
            </div>
          </div>
        </div>

        <div className={sidebar ? "menu" : "menu active"}>
          <ul>
            <li>
              <span className="fa fa-home"></span>Dashboard
            </li>
            <li>
              <span className="fa fa-user"></span>Profile
            </li>
            <li>
              <span className="fa fa-bell"></span>Notifications
            </li>
            <li>
              <span className="fa fa-comments"></span>Messages
            </li>
            <li>
              <span className="fa fa-gear"></span>Settings
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
