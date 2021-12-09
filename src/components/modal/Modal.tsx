import React, { FC, useContext } from 'react';
import ContextApp from '../../context/ContextApp';
import IconArrowBold from '../../assets/images/icon-arrow-bold.svg';
import IconArrow from '../../assets/images/icon-arrow.svg';
import { moveDownScreen } from '../../helpers/scrolling';
import { formatDate } from '../../helpers/date';
import ButtonCloseModal from '../Buttons/ButtonCloseModal';
import ItemData from '../items/ItemData';

const Modal: FC = () => {
    const { character, isHero, nextCharacterModal, prevCharacterModal } = useContext(ContextApp);

    return (
        <div className={`lg:h-4/6 h-5/6 ${isHero ? 'w-full ' : 'fixed lg:w-2/3 gradient-primary-y mt-auto border-2 shadow-2xl z-50 rounded-xl'} lg:mt-5  mx-auto inset-x-0  flex`}>

            <div className=" w-full my-auto h-5/6 ">
                {
                    !isHero ?
                        <div className="text-right w-ful px-1 absolute lg:right-5 right-5 top-5">
                            <ButtonCloseModal />
                        </div>
                        : null
                }
                <div className="flex justify-around my-auto h-3/4">
                    <button className="mx-auto" onClick={() => prevCharacterModal()}>
                        <img src={IconArrowBold} className=" w-20 transform rotate-270 animate-button-primary" alt="icon arrow prev" />
                    </button>
                    <div className="w-10/12 relative items-center justify-center text-center space-y-4">
                        <img src={character?.image} alt="" className="mx-auto lg:w-auto w-2/3 rounded-lg" />
                        <div className="absolute inset-x-0 inset-y-10/12 z-10 shadow-xl  md:w-3/5 mx-auto  w-full-mt-2 h-1/3 rounded-lg rounded-t-none">
                            <div className="lg:grid lg:grid-cols-2 bg-white rounded-lg border text-gray-900 border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm">
                                <ItemData text={character?.name} name="Name" />
                                <ItemData text={character?.species} name="species" />
                                <ItemData text={character?.type || '--'} name="type" />
                                <ItemData text={character?.gender} name="gender" />
                                <ItemData text={character?.status} name="status" />
                                <ItemData text={character?.origin?.name} name="origin" />
                                <ItemData text={character?.location?.name} name="location" />
                                <ItemData text={formatDate(character?.created)} name="location" />
                            </div>
                        </div>
                    </div>
                    <button className="mx-auto" onClick={() => nextCharacterModal()}>
                        <img src={IconArrowBold} className=" w-20 transform rotate-180 animate-button-primary" alt="icon arrow next" />
                    </button>
                </div>
                {
                    isHero ?
                        <div className="text-center h-36 absolute bottom-0 mx-auto inset-x-0">
                            <button onClick={moveDownScreen} >
                                <img src={IconArrow} className=" animate-bounce mx-auto w-20 transform  animate-button-primary" alt="icon arrow up" />
                            </button>
                        </div> : null
                }
            </div>
        </div>
    );
};

export default Modal;