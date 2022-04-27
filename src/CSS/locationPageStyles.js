import styled from 'styled-components';


export const ContactContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    margin-top: 6rem;
`
export const ContactHeader = styled.div`
    text-align: center;
    padding: 6.5rem 0rem 0rem 0rem;
    font-size: 3rem;
    font-family: OpenSans;
    color: #12130f;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1300px){
        padding: 6.5rem 0rem 0rem 0rem;
        font-size: 3rem;
    }

    @media screen and (max-width: 650px){
        padding: 6.5rem 0rem 0rem 0rem;
        font-size: 1.8rem;
    }
`
export const ContactContent = styled.div`
    /* background-color: green; */
    display: flex;
    justify-content: center;
    margin: 2rem 6rem 0rem 6rem;

    @media screen and (max-width: 1300px){
        flex-direction: column;
        align-items: center;
        margin: 2rem 2rem 0rem 2rem;
    }

    @media screen and (max-width: 650px){
        margin: 2rem 0rem 0rem 0rem;
    }
`
export const ContentLeft = styled.div`
    /* background-color: red; */
    width: 650px;
    height: 650px;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 3rem;
    
    @media screen and (max-width: 1300px){
        width: 650px;
        height: 650px;
        border-right: none;
        padding-right: 0rem;
    }

    @media screen and (max-width: 650px){
        width: 350px;
        height: 375px;
        border-right: none;
        padding-right: 0rem;
    }
`
export const MapContainer = styled.div`
    width: 650px;
    height: 450px;

    @media screen and (max-width: 1300px){
        width: 650px;
        height: 450px;
    }

    @media screen and (max-width: 650px){
        width: 325px;
        height: 275px;
    }
`
export const LeftHeader = styled.div`
    text-align: center;
    font-size: 2.5rem;
    color: #12130f;
    font-family: OpenSans;
    margin: 1.5rem 0rem 1rem 0rem;
    text-decoration: underline;
    text-decoration: underline wavy 0.1rem;

    @media screen and (max-width: 1300px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 650px){
        font-size: 1.5rem;
    }
`
export const LeftInfo = styled.div`
    font-size: 1.2rem;
    font-style: italic;
    color: #1b1c18;
    font-family: OpenSans;
    margin: 0rem 1rem;

    @media screen and (max-width: 1300px){
        font-size: 1.5rem;
        text-align: center;
    }

    @media screen and (max-width: 650px){
        font-size: 1rem;
        text-align: center;
    }
`
export const ContentRight = styled.div`
    width: 650px;
    height: 650px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1300px){
        width: 650px;
        height: 650px;
    }

    @media screen and (max-width: 650px){
        width: 350px;
        height: 600px;
    }
`
export const RightHeader = styled.div`
    font-size: 2.5rem;
    color: #12130f;
    font-family: OpenSans;
    margin: 1.5rem 0rem 1rem 0rem;
    text-decoration: underline wavy 0.1rem;
`
export const RightInfo = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    color: #1b1c18;
    font-family: OpenSans;
    
`