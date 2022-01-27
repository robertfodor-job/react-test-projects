import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from './data';
import SubMenu from './SubMenu';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleChangeSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaBars onClick={handleChangeSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiOutlineClose onClick={handleChangeSidebar} />
          </NavIcon>
          {data.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: all 0.3s;
  z-index: 999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
