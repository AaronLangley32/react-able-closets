import React from 'react';
import { ContactContainer, ContactContent, ContactHeader, ContentLeft, MapContainer, ContentRight, LeftHeader, LeftInfo, RightHeader, RightInfo } from '../CSS/locationPageStyles';


function LocationPage() {
  return (
    <ContactContainer>
      <ContactHeader>Location & Contact Information</ContactHeader>
      <ContactContent>
        <ContentLeft>
          <LeftHeader>
            Schedule a visit to our showroom!
          </LeftHeader>
          <LeftInfo>
            <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14188.779650577995!2d-80.2378521!3d27.2444157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x519fddd59e7c8d5e!2sAble%20Closets!5e0!3m2!1sen!2sus!4v1647562211380!5m2!1sen!2sus"
              title="Showroom"
              width="100%"
              height="100%"
              style={{'border': 'none'}}
              allowFullScreen=""
              loading="lazy"
              >
            </iframe>
            </MapContainer>
          </LeftInfo>
          <LeftInfo>
            BY APPOINTMENT ONLY, 1084 NE Jensen Beach Blvd, Jensen Beach, FL 34957
          </LeftInfo>
        </ContentLeft>
        <ContentRight>
          <RightHeader>
            Phone & Email
          </RightHeader>
          <RightInfo>
            (772) 486-4042
          </RightInfo>
          <RightInfo>
            AbleClosets@gmail.com
          </RightInfo>
          <RightHeader>
            Our Hours
          </RightHeader>
          <RightInfo>       
            <p>
            Sunday | Closed <br/>
            Monday | 9AM–5PM <br/>
            Tuesday | 9AM–5PM <br/>
            Wednesday | 9AM–5PM <br/>
            Thursday | 9AM–5PM <br/>
            Friday | 9AM–5PM <br/>
            Saturday | Closed <br/>
            </p>
          </RightInfo>
        </ContentRight>
      </ContactContent>
    </ContactContainer>
  )
}

export default LocationPage