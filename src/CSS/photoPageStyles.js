import styled from 'styled-components';


export const PhotoContainer = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: red; */
    position: absolute;
    z-index: -1;
    margin-top: 7rem;
`
export const PhotoHeader = styled.div`
    text-align: center;
    /* background-color: blue; */
    padding: 7rem 0rem 0rem 0rem;
    font-size: 4rem;
    font-family: Rossetti;
    color: #12130f;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    @media screen and (max-width: 1300px){
        padding: 6rem 0rem 0rem 0rem;
        font-size: 4rem;
    }
    @media screen and (max-width: 650px){
        padding: 6rem 0rem 0rem 0rem;
        font-size: 2.5rem;
    }
`
export const PhotoContent = styled.div`
    height: 100%;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    margin: 0rem 6rem 5rem 6rem;

    @media screen and (max-width: 1300px){
        margin: 0rem 0rem 5rem 0rem;
    }
    @media screen and (max-width: 650px){
        margin: 0rem 0rem 2rem 0rem;
    }
`
export const ImgGrid = styled.div`
    display: grid;
    /* background-color: purple; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 75px;
    padding: 25px 0px;

    @media screen and (max-width: 1300px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        padding: 10px 0px;
    }
    @media screen and (max-width: 650px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        padding: 10px 0px;
    }
`
export const ImgCard = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    border-radius: 10px;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.3));

    @media screen and (max-width: 1300px){
        width: 300px;
        height: 375px;
        border-radius: 5px;
        filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
    }
    @media screen and (max-width: 650px){
        width: 175px;
        height: 225px;
        border-radius: 3px;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
    }
`
export const ImgName = styled.div`

`
export const ImgImg = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 325px;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;

    @media screen and (max-width: 1300px){
        border-radius: 5px;
    }
    @media screen and (max-width: 650px){
        border-radius: 3px;
    }
`
export const ImgInfo = styled.div`
    text-align: center;
    font-family: Bebas;
    font-size: 2rem;
    color: #12130f;
    margin-top: 1rem;

    @media screen and (max-width: 1300px){
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1.25rem;
        margin-top: 0.2rem;
    }
`
