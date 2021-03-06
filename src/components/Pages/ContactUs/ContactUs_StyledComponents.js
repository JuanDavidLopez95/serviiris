import React from 'react';

import styled from 'styled-components';

import { IrisLogoWings } from './../../IrisLogo.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/


const ContactUsPageContainer = styled('section')`
    position: relative;
    z-index: 1;
    
    min-height: 100%;
    min-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin: auto;  */
    /* Align everything in the center */
    
    & > * {
        flex-grow: 1;
    }

    ::after {
        content: "";

        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: url("./assets/img/woman-talking-cellphone.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        opacity: 0.1;
        max-width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        width: 100%;

        margin: 0 auto;
      
    }

    @media only screen and (min-width: 766px) and (max-width: 768px) {
        margin-top:  15px;
    }
`; //end homepagecontainer

const ContactUsSection = styled('section')`
    background-color: #FFF308;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContactUsSectionHeader = styled('header')`
    text-align: center;
    color: #5425BA;

    margin-bottom: 25px;

    h3 {
        font-weight: bolder;
    }

    h4 {
        font-size: 1.1rem;
        font-style: italic;
    }

    @media only screen and (max-width: 992px) {
        h3 {
            margin-top:  15px;
        } 
    }
`;

const ContactUsSectionRow = styled('div')`
    min-width: 100%;

    position: relative;
    z-index: 1;
    
    display: flex;
    flex-direction: row;
    justify-content: center;

    border-radius: 12px;
`;

const ContactUsArticle = styled('article')`
    position:  relative;
    z-index: 1;
    
    margin: 1% 0.4%;
    margin-bottom: 5px;
    padding: 3% 1%;
    padding-top: 0%;

    background-color: white;
    /* rgba(84,37,186,1); */

    border-radius: 12px;

    color: white;

    overflow-y:  hidden;

    p {
        color: #5425BA;
        text-align: center;
        margin: auto;
        font-size: 1.1em;
        padding: 0% 10%;
    }        
`;

const ContactUsArticleImageContainerFigure = styled('figure')`
    position: relative;
    margin: 0;
    padding: 0;

    width: 100%;
    max-height: 40%;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

const ContactUsArticleImageContainerFigureImage = styled('img')`
    height: 100%;
    width: 100%;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

const ContactUsArticleButton = styled('label')`
    /* color: white; */
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;

    background-color: #5425BA;
    color: white;
        
    border: 1px solid #5425BA;
    border-radius: 12px;

    max-width: 80%;

    padding: 5px 15px;
    margin: 0 auto;

    transition: color 500ms, background-color 500ms, border-color 500ms;

    :hover, :active, :visited {
        /* color: #5425BA; */
        background-color: #5425BA;

        border: 1px solid #5425BA;
    } 
    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-style: italic;
        transition: color 500ms, background-color 500ms, border-color 500ms;
    }

    a:hover {
        color: #5425BA;
    }
`;

const ContactUsArticleTitle = styled('h3')`
    margin-top: 25%;

    color: #5425BA;

    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
`;

const ContactUsArticleTitleBorderHR = styled('hr')`
    color: black;
    background-color: #5425BA;
    width: 75%;

    margin-top: 30px;
    margin-bottom: 0.35rem;
`;



const ContactUsSectionColContainer  = styled('a')`
    position: relative;
    z-index: 1;
    
    background-color: ${props => props.bgColor || "red"};

    margin: 1% 1%;

    border-radius: 12px;
    /* border: 2px solid rgba(84, 37, 186, 0.7); */

    text-align: center;

    transform: scale(1.0);
    box-shadow: 0px; 

    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

    :hover, :active, :visited {
        transform: scale(1.1);
        box-shadow: 0px 0px 5px 0px rgba(84,37,186,1);
    }
`;

const ContactUsSectionColumnArticle = styled('article')`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    color: black;

    padding: 15%;

    font-style: italic;

    a, svg {
        margin-top: 15%;
    }
    a {
        color: black;
        text-decoration: underline;
    }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: black;
    font-size: 2.5em; 
    text-align: center;
    margin: 0 auto;
`; //end FontAwesomeIconStyled

const ContactUsSectionCol = ( { title, faIcon, description, bgColor, link } ) => {
    return (
        <ContactUsSectionColContainer 
            className   =   "col-sm-5 col-md-5 col-lg" 
            bgColor     =   { bgColor || "white" }
            href        =   { link }
        >
            <ContactUsSectionColumnArticle>
                <h5>{ title || "Centro de soluciones"}</h5>
                <FontAwesomeIconStyled icon={ faIcon }/>
                <a href={ link }>{ description || "iristeamco@gmail.com"}</a>
            </ContactUsSectionColumnArticle>
        </ContactUsSectionColContainer>
    ); //end return statement
};
 
export { ContactUsPageContainer, ContactUsSection, ContactUsSectionHeader, ContactUsSectionRow, ContactUsSectionCol, FontAwesomeIconStyled, ContactUsArticleTitleBorderHR };