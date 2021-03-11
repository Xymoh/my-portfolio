import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="resume"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            CV
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
