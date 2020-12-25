import { Button } from '@material-ui/core'; // Create custom button
import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

import { SliderData } from '../../assets/SliderData';

const FeaturedListingsSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    overflow: hidden;
    position: relative;
`;

const ListingsWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;

`;

// Listings Slider
const ListingSlide = styled.div`
height: 100%;
width: 100%;
z-index: 1;
`;
const ListingSlider = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2) 100%,
        );
    }
`;
const ListingImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`;
const ListingContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;

h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-width: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}

p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem
`;

const arrowButtons = css`
    background: #000d1a;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    height: 50px;
    margin-right: 1rem;
    padding: 10px;
    transition: 0.3s
    user-select: none;
    width: 50px;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const SliderButtons = styled.div`
    bottom: 50px;
    display: flex;
    position: absolute;
    right: 50px;
    z-index: 10;
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const FeaturedListings = () => {
    
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const timeout = useRef(null);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    }


    return(
    <FeaturedListingsSection>
            <ListingsWrapper>
                <h1>Featured Listings</h1>
                {SliderData.map((slide, index) => (
                    <ListingSlide key={index}>
                        <ListingSlider>
                            <ListingImage src={slide.image} alt={slide.alt}/>
                            <ListingContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} primary='true'>
                                {slide.label}
                                    <Arrow />
                                </Button>
                            </ListingContent>
                        </ListingSlider>

                    </ListingSlide>
                ))}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </ListingsWrapper>
    </FeaturedListingsSection>  
    )
}

export default FeaturedListings;