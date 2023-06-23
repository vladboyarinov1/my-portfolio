import React, {FC} from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';

type PropsType = {
    title: string
    fixedHeader: boolean
    to: string
}

export const LinkItem: FC<PropsType> = ({title, fixedHeader, to}) => {
    return (
        <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                     to={to}>{title}</LinkWrapper>
    );
};
const LinkWrapper = styled(Link)<{ fixedHeader: boolean }>`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none !important;

  color: ${props => props.fixedHeader ? 'black' : 'rgba(255,255,255,0.8)'};
  position: relative;

  &.active {
    text-decoration: underline;
    color: #96bb7c;
  }

  &:hover {
    color: ${props => props.fixedHeader ? '' : '#fff'};
  }
`;
