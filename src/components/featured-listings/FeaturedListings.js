import { Button } from '@material-ui/core';
import React from 'react';
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
const ListingSlide = styled.div``;
const ListingSlider = styled.div``;
const ListingImage = styled.img``;
const ListingContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

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

const NextArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const PrevArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const FeaturedListings = () => {
    console.log(SliderData);
    return(
    <FeaturedListingsSection>
            <ListingsWrapper>
                <h1>Featured Listings</h1>
                {SliderData.map((slide, index) => (
                    <ListingSlide key={index}>
                        <ListingSlider>
                            <ListingImage/>
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
                    <NextArrow />
                    <PrevArrow />
                </SliderButtons>
            </ListingsWrapper>
    </FeaturedListingsSection>  
    )
}

export default FeaturedListings;