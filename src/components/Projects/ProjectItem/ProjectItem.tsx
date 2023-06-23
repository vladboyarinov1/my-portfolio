import React, { FC, useState } from 'react';
import s from './ProjectItem.module.css';
import styled from 'styled-components';

type PropsType = {
    id: number;
    title: string;
    description: string;
    projectImg: string;
    link: string;
};

export const ProjectItem: FC<PropsType> = ({
                                               id,
                                               title,
                                               description,
                                               projectImg,
                                               link,
                                           }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={s.project}>
            <ImgContainer href={link} target='_blank'
                imgUrl={projectImg}
                className={s.imgContainer}
                isHovered={isHovered}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/*<a href={link} className={s.button} target="_blank" rel="noopener noreferrer">*/}
                {/*    View*/}
                {/*</a>*/}
            </ImgContainer>
            <div className={s.text}>
                <h2 className={s.title}>{title}</h2>
                <span className={s.description}>{description}</span>
            </div>
        </div>
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
    opacity: ${(props) => (props.isHovered ? 1 : 0)};
    transition: all 0.3s;
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
    font-weight: bold;
    opacity: 0;
    transition: all 0.3s;
  }

  /* Позволяет кликать на элемент a, даже если у него есть псевдоэлементы */
  pointer-events: auto;
`;