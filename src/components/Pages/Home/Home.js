import React from 'react';

import { HomePageContainer, LeftColumn, RightColumn, RightColumnContainer, HomeIrisLogo, WelcomeText, IrisHomeDescription, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeInput, EmailSubscribeButton } from './HomeStyledComponents.js';

const Home = (props) => {
    return (
        <HomePageContainer className="row home-page-container">
                <LeftColumn className="col-md-6 left-column">
                    <HomeIrisLogo 
                        color   =   "#7A40DB"
                        width   =   "400px"
                        height  =   "400px"  
                    />
                </LeftColumn>
                <RightColumn className="col-md-6 right-column">
                    <RightColumnContainer id="right-column-container">
                        <WelcomeText id="welcome-text">Bienvenido a Iris</WelcomeText>
                            <IrisHomeDescription title="iris-home-description">
                                Somos un servicio de mensajería prestado exclusivamente por mujeres, 
                                en su mayoría cabeza de familia. Nos especializamos en brindar un 
                                servicio oportuno, amable y de calidad. 
                            </IrisHomeDescription>

                            <address>
                                <a href="mailto:iristeamco@gmail.com">
                                    iristeamco@gmail.com
                                </a>
                                <a href="https://wa.link/aloo0e">
                                    +57 (311) 718-4447
                                </a>
                            </address>
                    </RightColumnContainer>

                    <PromotionesContainerAddress id="promotions-container-address">
                        <PromotionsTitle id="promotions-title">
                            Promociones, novedades y más..
                        </PromotionsTitle>
                        <p>
                            <EmailSubscribeInput 
                                type        =   "text" 
                                placeholder =   "Ingresa tu e-mail"
                            />
                            <label>
                                <EmailSubscribeButton>Enviar</EmailSubscribeButton>
                            </label>
                        </p>
                    </PromotionesContainerAddress>
   
                </RightColumn>
        </HomePageContainer>
     
    ); //end return
}; //end Home

export default Home;