import React, { FC, useContext } from 'react';
import IconArrowBold from '../../assets/images/icon-arrow-bold.svg';
import ContextApp from '../../context/ContextApp';
import { moveUpScreen } from '../../helpers/scrolling';

const ButtonUploadPage: FC = () => {
    const { isHero } = useContext(ContextApp);
    return !isHero ? (
        <button onClick={moveUpScreen} className="w-20 h-20 flex z-10  fixed items-center bottom-3 right-5 bg-yellow-200 rounded-lg">
            <img src={IconArrowBold} className="w-16 transform mx-auto rotate-90 hover:rotate-45 animate-button-primary" alt="icon arrow up" />
        </button>
    ) : null
}

export default ButtonUploadPage;