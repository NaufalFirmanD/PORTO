"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconMessage,
} from "@tabler/icons-react";

const Navbar: React.FC = () => {
  const navItems = [
    {
      name: "Beranda",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "Pengalaman",
      link: "#experience",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Proyek",
      link: "#projects",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Kontak",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
