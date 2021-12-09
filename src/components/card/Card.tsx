import { FC, useContext } from 'react';
import ContextApp from '../../context/ContextApp';
import IconArrow from '../../assets/images/icon-arrow-bold.svg';
import { TypeCharacter } from '../../types/type';

const Card: FC<TypeCharacter> = ({ image, name, id }) => {
    const { showCharacterModal } = useContext(ContextApp);
    return (
        <div className="m-4 py-2 space-y-4 shadow-lg rounded-lg gradient-primary-y transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:gradient-primary-y">
            <div className="relative">
                <img
                    className=" object-cover rounded-sm border-2 mx-auto border-white "
                    src={image}
                    alt={name}
                />
                <div className="absolute top-2 right-5 rounded-full bg-white h-10 w-10 flex items-center justify-center" >
                    <span >{id}</span>
                </div>
            </div>
            <div className="text-center text-white">
                <h2 className="text-3xl font-semibold">{name}</h2>
            </div>
            <div className="flex text-gray-900 cursor-pointer" onClick={() => showCharacterModal(id)}>
                <img src={IconArrow} className="mx-auto w-1/5 transform rotate-90 animate-button-primary " alt="icon arrow up" />
            </div>
        </div>
    )
}
export default Card;