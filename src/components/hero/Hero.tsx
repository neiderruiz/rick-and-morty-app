import { useContext, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import ContextApp from '../../context/ContextApp';
import Modal from '../modal/Modal';

const Hero = () => {
    const { changeIsHero, getCharacterData } = useContext(ContextApp);
    
    useEffect(() => {
        getCharacterData()
        window.addEventListener('scroll', function (e) {
            if (this.window.scrollY < 100) {
                changeIsHero(true);
            }
        });
    }, []);

    return (
        <div className="h-screen  bg-indigo-300 hero">
            <div className=" flex">
                <img src={Logo} alt="logo rick and morty" className="mx-auto mt-5" />
            </div>
            <Modal />
        </div>
    );
};

export default Hero;