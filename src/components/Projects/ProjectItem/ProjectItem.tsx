import React, {FC, useState} from 'react';
import s from './ProjectItem.module.css';
import styled from 'styled-components';
// @ts-ignore
import {Slide} from 'react-reveal';
import {useWindowSize} from '../../../hooks/useWindowSize';

type PropsType = {
    id: number;
    title: string;
    description: string;
    projectImg: string;
    link: string;
    isDark: boolean
};

export const ProjectItem: FC<PropsType> = ({
                                               id,
                                               title,
                                               description,
                                               projectImg,
                                               link,
                                               isDark
                                           }) => {
    const [isHovered, setIsHovered] = useState(false);
    const {width} = useWindowSize();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const isWidth = width && width < 768 ? 'left' : 'bottom'

    return (
        <Slide left={isWidth === 'left'} bottom={isWidth === 'bottom'}>
            <div className={s.project} style={isDark ? {
                boxShadow: '6px 6px 6px rgba(255, 255, 255, 0.4)'
            } : {boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.2'}}>
                <ImgContainer href={link} target="_blank"
                              imgUrl={projectImg}
                              className={s.imgContainer}
                              isHovered={isHovered}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                >
                </ImgContainer>
                <div className={s.text}>
                    <h2 className={s.title}>{title}</h2>
                    <span className={s.description}>{description}</span>
                </div>
            </div>
        </Slide>
    );
};

const ImgContainer = styled.a<{ imgUrl: string; isHovered: boolean }>`
  display: block;
  width: 100%;
  height: 300px;
  background-color: rgba(93, 149, 241, 0.85);
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  border-radius: 4px 4px 0 0;


  &::before {
    content: '';
    position: absolute;
    border-radius: 3px 3px 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${(props) => (props.isHovered ? 1 : 0.3)};
    transition: all 0.3s;
  }

  &:focus {
    backdrop-filter: blur(1);
  }

  &:hover {
    background-size: 110% 110%;

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: 'Click to View';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s;
  }

  /* Позволяет кликать на элемент a, даже если у него есть псевдоэлементы */
  pointer-events: auto;
`;