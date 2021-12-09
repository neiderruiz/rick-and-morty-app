import { FC, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ContextApp from '../../context/ContextApp';
import SuspenseLoading from '../suspenses/SuspenseLoading';
import Card from '../card/Card';
import ButtonUploadPage from '../Buttons/ButtonUploadPage';
import { TypeCharacter } from '../../types/type';

const Content: FC = () => {

  const { characters, getMoreData } = useContext(ContextApp);

  return (
    <div className="gradient-green-gray-y">
      <InfiniteScroll
        dataLength={characters.length}
        next={getMoreData}
        hasMore={true}
        loader={<SuspenseLoading />}
      >
        <div className=" ">
          <div className="pt-10 lg:grid lg:grid-cols-5 lg:px-10 space-y-6">
            {
              characters.map((character: TypeCharacter, index: number) => {
                return (
                  <Card key={index} {...character} />
                )
              }
              )
            }
          </div>
        </div>
      </InfiniteScroll>
      <ButtonUploadPage />
    </div>
  );
}

export default Content;