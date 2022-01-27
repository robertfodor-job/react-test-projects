import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.5s;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item, key }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subnav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subnav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
