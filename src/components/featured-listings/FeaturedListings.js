import React from 'react';
import styled from 'styled-components/macro';

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

const ListingSlide = styled.div``;
const ListingSlider = styled.div``;
const ListingImage = styled.img``;
const ListingContent = styled.div``;

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
                            </ListingContent>
                        </ListingSlider>

                    </ListingSlide>
                ))}
            </ListingsWrapper>
    </FeaturedListingsSection>  
    )
}

export default FeaturedListings;