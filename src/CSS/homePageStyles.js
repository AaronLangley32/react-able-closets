import styled from 'styled-components';


export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    z-index: -1;
    margin-top: 10rem;
    @media screen and (max-width: 1300px) {
        margin-top: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 650px) {
        margin-top: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const HomeContent = styled.div`
    /* background-color: red; */
    height: 500px;
    display: flex;
    margin: 5rem 6rem 0rem 6rem;
    justify-content: center;

    @media screen and (max-width: 1300px) {
        margin: 0rem 0rem 0rem 0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 75px;
        padding: 0px 0px 25px 0px;
    }
    @media screen and (max-width: 650px) {
        height: 400px;
        margin: 0rem 0rem 0rem 0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        padding: 0px 0px 25px 0px;
    }
`
export const HomeHeader = styled.div`
    text-align: center;
    padding: 8rem 0rem 0rem 0rem;
    font-size: 5rem;
    color: #12130f;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1300px) {
        padding: 1rem 0rem 2rem 0rem;
        font-size: 3.5rem;
    }
    @media screen and (max-width: 650px) {
        padding: 1rem 0rem 1.5rem 0rem;
        font-size: 3rem;
    }
`
export const ModelContainer = styled.div`
    height: 25rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */

    @media screen and (max-width: 1300px) {
        height: 18rem;
        width: 15rem;
    }
    @media screen and (max-width: 650px) {
        height: 18rem;
        width: 15rem;
        margin-top: 1rem;
    }
`
export const ModelName = styled.div`
    margin: 0rem 0rem;
    color: #12130f;
    font-size: 2.2rem;
    font-style: italic;
    transform: translateY(150%);
    opacity: 0;
    @keyframes textLoop {
        0% {
            transform: translateY(150%);
            opacity: 0;
        }
        40% {
            transform: translateY(150%);
            opacity: 0;
        }
        50% {
            transform: translateY(-5%);
            opacity: 1;
        }
        60% {
            transform: translateY(-5%);
            opacity: 1;
        }
        70% {
            transform: translateY(150%);
            opacity: 0;
        }
    }

    @media screen and (max-width: 1300px) {
        font-size: 1.8rem;
            @keyframes textLoop {
                0% {
                    transform: translateY(150%);
                    opacity: 0;
                }
                40% {
                    transform: translateY(150%);
                    opacity: 0;
                }
                50% {
                    transform: translateY(-55%);
                    opacity: 1;
                }
                60% {
                    transform: translateY(-55%);
                    opacity: 1;
                }
                70% {
                    transform: translateY(150%);
                    opacity: 0;
                }
            }
    }
    @media screen and (max-width: 650px) {
        font-size: 1.8rem;
            @keyframes textLoop {
            0% {
                transform: translateY(150%);
                opacity: 0;
            }
            40% {
                transform: translateY(150%);
                opacity: 0;
            }
            50% {
                transform: translateY(-55%);
                opacity: 1;
            }
            60% {
                transform: translateY(-55%);
                opacity: 1;
            }
            70% {
                transform: translateY(150%);
                opacity: 0;
            }
        }
    }
`
export const ModelImage = styled.div`
    height: 25rem;
    width: 20rem;
    margin: 1rem 0rem 0rem 0rem;
    padding: 0rem 0.5rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-left: white 1px;
    border-right: white 1px;
    
    @media screen and (max-width: 1300px) {
        height: 17rem;
        width: 17rem;
        margin: 0rem 0rem 0rem 0rem;
        padding: 0rem 0.5rem;
        
    }
    @media screen and (max-width: 650px) {
        height: 20rem;
        width: 15rem;
        margin: 0rem 0rem 0rem 0rem;
        padding: 0rem 0.5rem;
    }
    
    @keyframes scaleLoop {
        0% {
            transform: scale(1);
            
        }
        40% {
            transform: scale(1);
            
        }
        50% {
            transform: scale(1.1);
            filter: grayscale(0%);
        }
        60% {
            transform: scale(1.1);
            filter: grayscale(0%);
        }
        70% {
            transform: scale(1);
            
        }

    }

`