import React, { useEffect, useState } from "react";
import light from "./bulb.svg";
import lightoff from "./switchoff.svg";

export const menus = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "top",
  },
  {
    label: "Movie",
    key: "Movie",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "top",
    subMenus: [
      {
        label: "Movie1",
        key: "Movie1",
        isSelect: false,
      },
      {
        label: "Movie2",
        key: "Movie2",
        isSelect: false,
      },
      {
        label: "Movie3",
        key: "Movie3",
        isSelect: false,
      },
      {
        label: "Movie4",
        key: "Movie4",
        isSelect: false,
      },
      {
        label: "Movie5",
        key: "Movie5",
        isSelect: false,
      },
      {
        label: "Movie6",
        key: "Movie6",
        isSelect: false,
      },
      {
        label: "Movie7",
        key: "Movie7",
        isSelect: false,
      },
      {
        label: "Movie8",
        key: "Movie8",
        isSelect: false,
      },
    ],
  },
  {
    label: "Series",
    key: "Series",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "top",
    subMenus: [
      {
        label: "Series1",
        key: "Series1",
        isSelect: false,
      },
      {
        label: "Series2",
        key: "Series2",
        isSelect: false,
      },
      {
        label: "Series3",
        key: "Series3",
        isSelect: false,
      },
      {
        label: "Series4",
        key: "Series4",
        isSelect: false,
      },
    ],
  },

  {
    label: "Books",
    key: "Books",
    icon: light,
    activeIcon: lightoff,
    isnavigation: "center",
    subMenus: [
      {
        label: "Books1",
        key: "Books1",
        isSelect: false,
      },
      {
        label: "Books2",
        key: "Books2",
        isSelect: false,
      },
      {
        label: "Books3",
        key: "Books3",
        isSelect: false,
      },
      {
        label: "Books4",
        key: "Books4",
        isSelect: false,
      },
    ],
  },
  {
    label: "Playground",
    key: "Playground",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "center",
  },
  {
    label: "Games",
    key: "Games",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "center",
  },

  {
    label: "Anime",
    key: "Anime",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "default",
    subMenus: [
      {
        label: "Anime1",
        key: "Anime1",
        isSelect: false,
      },
      {
        label: "Anime2",
        key: "Anime2",
        isSelect: false,
      },
      {
        label: "Anime3",
        key: "Anime3",
        isSelect: false,
      },
    ],
  },

  {
    label: " Insurance",
    key: "Insurance",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "default",
  },
  {
    label: "Tutorials",
    key: "Tutorials",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "bottom",
  },
  {
    label: "Help",
    key: "help",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "bottom",
  },
  {
    label: "Logout",
    key: "logout",
    icon: light,
    activeIcon: lightoff,
    isSelect: false,
    isnavigation: "bottom",
  },
];
