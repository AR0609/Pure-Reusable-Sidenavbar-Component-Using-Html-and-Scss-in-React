import React, { useEffect, useState } from "react";
import "./sidenavbar.scss";
import user from "./user.svg";
import icon from "./hamburger.svg";
import up from "./up.svg";
import down from "./down.svg";
const Sidenavbarpresentational = ({ menus }) => {
  const [mainmenu, setMainmenu] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [size, setSize] = useState(false);
  useEffect(() => {
    setMainmenu(menus);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        setSize(true);
      } else {
        setSize(false);
      }
    };

    window.addEventListener("resize", handleResize);

    window.onresize = handleResize();
  }, []);
  const menufilter = (array, role) => {
    return array.filter((items) => items.isnavigation === role);
  };
  const topMenuItems = menufilter(mainmenu, "top");
  const centerMenuItems = menufilter(mainmenu, "center");
  const defaultMenuItems = menufilter(mainmenu, "default");
  const bottomMenuItems = menufilter(mainmenu, "bottom");

  const handleMenuBar = (list) => {
    const head = mainmenu.map((item) => {
      console.log(menus, "bood");
      if (item.key === list) {
        return { ...item, isSelect: !item.isSelect };
      }
      return { ...item, isSelect: false };
    });
    setMainmenu(head);
  };
  const handlesubmenu = (list) => {
    const submenus = mainmenu?.map((item) => {
      return {
        ...item,
        subMenus: item?.subMenus?.map((items) => {
          if (items.key === list) {
            return { ...items, isSelect: true };
          }
          return { ...items, isSelect: false };
        }),
      };
    });
    setMainmenu(submenus);
  };
  console.log(mainmenu, "boo");
  return (
    <section className={navbar || size ? "responsive" : "navbar"}>
      <div className="side-nav-outer">
        <div className="side-nav-inner">
          <div className="side-nav-top">
            <div className="profile">
              <div
                className="profile-image"
                style={{ display: "flex", alignItems: "end" }}
              >
                <img src={user} className="user" />
              </div>
              <div className="profile-content">
                <p className="h5 side-nav-user-name">AR0609</p>
                <p className="verifier">Premium Account</p>
              </div>

              <div className="profile-icon">
                <img
                  src={icon}
                  onClick={() => setNavbar(!navbar)}
                  className="navicon"
                />
              </div>
            </div>
          </div>
          <div className="side-nav-items">
            {topMenuItems?.map((item) => (
              <GetMenuItem
                menus={item}
                handleMenuBar={handleMenuBar}
                mainmenu={mainmenu}
                handlesubmenu={handlesubmenu}
              />
            ))}
          </div>
          <div className="side-nav-items">
            {centerMenuItems?.map((item) => (
              <GetMenuItem
                menus={item}
                handleMenuBar={handleMenuBar}
                mainmenu={mainmenu}
                handlesubmenu={handlesubmenu}
              />
            ))}
          </div>
          <div className="side-nav-items" style={{ marginBottom: "242px" }}>
            {defaultMenuItems?.map((item) => (
              <GetMenuItem
                menus={item}
                handleMenuBar={handleMenuBar}
                mainmenu={mainmenu}
                handlesubmenu={handlesubmenu}
              />
            ))}
          </div>
          <div className="side-nav-items">
            {bottomMenuItems?.map((item) => (
              <GetMenuItem
                menus={item}
                handleMenuBar={handleMenuBar}
                mainmenu={mainmenu}
                handlesubmenu={handlesubmenu}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidenavbarpresentational;
const GetMenuItem = ({ menus, handleMenuBar, handlesubmenu }) => {
  return (
    <div className="noresponsive">
      <div
        className={` As-nav-out ${menus?.isSelect ? "As-nav-out-active" : ""}`}
        onClick={() => handleMenuBar(menus?.key)}
      >
        <div className="As-nav-item">
          <img
            src={menus?.isSelect ? menus.icon : menus.activeIcon}
            className="As-icon"
          />
          <div
            className={
              menus?.isSelect ? "As-nav-label-active" : "As-nav-label-out"
            }
          >
            {menus.label}{" "}
          </div>
        </div>
        <div className="As-nav-arrow">
          {menus?.subMenus?.length > 0 && (
            <img
              src={menus?.isSelect ? up : down}
              className="As-sub-menu-arrow"
            />
          )}
        </div>
      </div>
      <div className="submenu">
        {menus?.subMenus?.length > 0 &&
          menus?.isSelect &&
          menus?.subMenus?.map((item) => (
            <Getsubmenu menus={item} handlesubmenu={handlesubmenu} />
          ))}
      </div>
    </div>
  );
};
const Getsubmenu = ({ menus, handlesubmenu }) => {
  return (
    <div
      className={` As-nav-submenu ${
        menus.isSelect ? "As-nav-submenu-active" : ""
      } `}
      onClick={() => handlesubmenu(menus?.key)}
    >
      <p>{menus.label} </p>
    </div>
  );
};
