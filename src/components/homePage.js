import React from 'react';
import img1 from '../images/customer.png'
import img2 from '../images/contractor.png'
import img3 from '../images/mockup.png'
import img4 from '../images/finished.png'
import { HomeContainer, HomeContent, HomeHeader, ModelContainer, ModelName, ModelImage } from '../CSS/homePageStyles'

function HomePage() {
  return (
    <HomeContainer>
        <HomeHeader style={{'fontFamily': 'Rossetti'}}>make room for living</HomeHeader>
        <HomeContent>
            <ModelContainer>
                <ModelName style={{'animation': 'textLoop 9s infinite'}}>Contact Us</ModelName>
                <ModelImage style={{'animation': 'scaleLoop 9s infinite'}}><img src={img1} alt="customer" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName style={{'animation': 'textLoop 9s 2s infinite'}}>Preparation</ModelName>
                <ModelImage style={{'animation': 'scaleLoop 9s 2s infinite'}}><img src={img2} alt="planning" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName style={{'animation': 'textLoop 9s 4s infinite'}}>Execution</ModelName>
                <ModelImage style={{'animation': 'scaleLoop 9s 4s infinite'}}><img src={img3} alt="designing" /></ModelImage>
            </ModelContainer>
            <ModelContainer>
                <ModelName style={{'animation': 'textLoop 9s 6s infinite'}}>Voilà!</ModelName>
                <ModelImage style={{'animation': 'scaleLoop 9s 6s infinite'}}><img src={img4} alt="final" /></ModelImage>
            </ModelContainer>
        </HomeContent>
    </HomeContainer>
  )
}

export default HomePage