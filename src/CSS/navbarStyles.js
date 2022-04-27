import styled from 'styled-components'
import logoImg from '../images/logo_black.png'

export const Logo = styled.div`
    width: 12.8rem;
    height: 7.2rem;
    background-image: url(${logoImg});
    background-size: cover;
    z-index: 10;
    @media screen and (min-width: 1024px) {

    }
    @media screen and (min-width: 1216px) {
        
    }
    @media screen and (min-width: 1408px) {
        
    } 
`
export const Navbar = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10rem;
    position: fixed;
`
export const NavbarContainer = styled.div`
    /* background-color: purple; */
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1.5rem 0rem;
    @media screen and (min-width: 1024px) {
        max-width: 832px;
    }
    @media screen and (min-width: 1216px) {
        max-width: 1024px;
    }
    @media screen and (min-width: 1408px) {
        max-width: 1216px;
    }    
`
export const NavbarMenu = styled.div`
    /* background-color: blue; */
    display: none;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    @media screen and (min-width: 1024px) {
        display: flex;
    }
    @media screen and (min-width: 1216px) {
        
    }
    @media screen and (min-width: 1408px) {
        
    } 
`
export const DropdownBars = styled.button`
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-left: auto;
    padding: 1.2rem;
    margin-right: 1rem;
    @media screen and (min-width: 1024px) {
        display: none;
    }
    @media screen and (min-width: 1216px) {
        
    }
    @media screen and (min-width: 1408px) {
        
    } 
`
export const MobileNavbar = styled.div`
    transform: ${({ isOpen }) => (isOpen ? "translateX(0%)" : "translateX(-150%)")};
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: #ffffff;
    margin-top: 10rem;
    width: 100%;
    padding: none;
    margin: none;
    transition: all 1s ease-in-out;
    box-shadow: 0px 10px 13px -10px #000000, 5px 5px 15px 2px rgba(0,0,0,0);
    @media screen and (min-width: 1024px) {
        transform: translateX(-150%);
    }
    @media screen and (min-width: 1216px) {
        
    }
    @media screen and (min-width: 1408px) {
        
    } 
`
export const PhoneLink = styled.a`

`
export const EmailLink = styled.a`

`