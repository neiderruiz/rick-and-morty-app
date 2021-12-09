type Props = {
    text: string;
    name: string;
};
const ItemData = ({ name, text }: Props) => {
    return (
        <div className="cursor-pointer border-l-2 border-black m-2 px-4 py-2  flex justify-between hover:bg-gray-100 hover:text-blue-700 text-sm font-medium  ">
            <b>{name}:</b>
            <p>{text}</p>
        </div>
    )
}

export default ItemData;