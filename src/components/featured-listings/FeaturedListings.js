import { Button } from '../button/Button';
import React, { useEffect, useState, useRef } from 'react';
import './featuredListings.css';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

import { SliderData } from '../../assets/SliderData';

const FeaturedListingsSection = styled.section`

    padding: 3rem;
    margin-top:2rem;
    height: 85vh;
    max-height: 1100px;
    overflow: hidden;
    position: relative;
`;

const ListingsWrapper = styled.div`
    border: 3px solid black;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;

`;

const ListingSlide = styled.div`
height: 100%;
width: 100%;
z-index: 1;
`;


const ListingSlider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const ListingContent = styled.div`
 position: absolute;
height: 150px;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 270px;
color: #fff;
left: 1%;
bottom: 2%;

h2 {
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 200;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.8rem;
}

p {
    line-height: 1;
    font-size: 25px;
    font-family: "Arapey",Georgia,"Times New Roman",Times,serif;
    font-style: italic;
    text-align: center;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
`;
const ListingImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
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
    // console.log('length: ', length);
    const timeout = useRef(null);

    const prevSlide = () => {
        //if current slide === first slide -> start current from last slide, else go back 1 slide
        setCurrent(current === 0 ? length - 1: current - 1 );
    }
    
    const nextSlide = () => {
        //if current slide === last slide -> start current from first slide, else go forward 1 slide
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    
    useEffect(() => {
        const nextSlide = () => {
            //if current slide is the last slide -> start current from the beginning, else go forward 1 slide
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 3000);

        // Allows the slide to change gracefully, rather abruptly
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]
    );


    return(
        <div className="featured__listings">
            <div className="title__container">
                <h1 className="title">Luxury Real Estate</h1>
            </div>
    <FeaturedListingsSection>
            <ListingsWrapper>
                {SliderData.map((slide, index) => (
                    <ListingSlide key={index}>
                        {index === current && (
                            <ListingSlider>
                                <ListingImage src={slide.image} alt={slide.alt}/>
                                <ListingContent>
                                    <h2>{slide.title}</h2>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary='true'>
                                    {slide.label}
                                        <Arrow />
                                    </Button>
                                </ListingContent>
                            </ListingSlider>
                        )}
                    </ListingSlide>
                ))}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </ListingsWrapper>
    </FeaturedListingsSection>  

        </div>
    )
}

export default FeaturedListings;