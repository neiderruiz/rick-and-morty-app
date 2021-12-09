import { FC, useContext } from 'react';
import IconClose from '../../assets/images/icon-close.svg';
import ContextApp from '../../context/ContextApp';

const ButtonCloseModal: FC = () => {
    const { changeIsHero } = useContext(ContextApp);
    return (
        <button className="outline-none" onClick={() => changeIsHero(true)} title="cerrar modal">
            <img src={IconClose} alt="close" className="w-12 transform rotate-90 hover:rotate-180 animate-button-primary  " />
        </button>
    );
};

export default ButtonCloseModal;