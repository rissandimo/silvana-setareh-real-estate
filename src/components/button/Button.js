import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './button.css';

export const Button = styled(Link)
`
background: ${({ primary }) => (primary ? '#000d1a': 'CD853F')};
margin-top: 1rem;
padding: 0.5rem 1.5rem;
`;