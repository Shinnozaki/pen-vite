import React, { useState } from "react";
import Navbar from "./Navbar";
import GiftCard from "./GiftCard";

interface Card {
  id: number;
  result: React.ReactNode
}

const Gift = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);


  // useEffect(() => {
  //   if (counts === 1) {
  //     setValue(data[0].result);
  //   } else if (counts === 2) {
  //     setValue(data[1].result);
  //   } else if (counts >= 3) {
  //     setValue(data[2].result);
  //   }
  // }, [counts]);

  const handleClickBox = (id: number) => {

    if (!selectedCards.some((card) => card.id === id)) {
      const newContent = data.find((card) => card.id === id)?.result || null
      setSelectedCards([...selectedCards, { id, result: newContent }]);
      setCounts((prevCounts) => ({ ...prevCounts, [id]: (prevCounts[id] || 0) + 1 }));
    }
  };

  const data: Card[] = [
    {
      id: 1,
      result: (
        <>
          <img src="/gifts/nt1.png" alt="" />
          <button
            className="w-full py-2 bg-[#f3b84f]/50 rounded-full text-white font-semibold text-lg"
            disabled
          >
            {`Yahhh kosong :(`}
          </button>
        </>
      ),
    },
    {
      id: 2,
      result: (
        <>
          <iframe
            src="https://youtube.com/embed/RYXKIQ4NFI0?si=Jwza3jsW4VUOTtxl?autoplay=1"
            allow="autoplay"
            height="200"
          ></iframe>
          <button
            className="w-full py-2 bg-[#f3b84f]/50 rounded-full text-white font-semibold text-lg"
            disabled
          >
            {`*Emoji menari 3x*`}
          </button>
        </>
      ),
    },
    {
      id: 3,
      result: (
        <>
          <h1>congrats</h1>
          <a href="https://wa.me/6281371931101?text=p%20kado" target="_blank" className="w-full">
            <button className="w-full py-2 bg-green-500 rounded-full text-white font-semibold text-lg shadow-lg">{`Click to claim your gift`}</button>
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="absolute w-screen h-screen z-50 bg-[url('/meningsoy.jpeg')] flex flex-col justify-center items-center xs:flex lg:hidden">
        <div className="text-center flex flex-col justify-center gap-5 bg-blue-100/50 w-screen h-screen p-5 rounded-lg">
          <div className="py-8 flex flex-col gap-5 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold">{`Please use laptop :>`}</h1>
            <h1 className="text-xl">{`Saia mager bikin responsive nya ehek`}</h1>
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-screen z-50 bg-[url('/meningsoy.jpeg')] hidden flex-col justify-center items-center md:flex lg:hidden">
        <div className="text-center flex flex-col justify-center gap-5 bg-blue-100/50 w-screen h-screen p-5 rounded-lg">
          <div className="py-8 flex flex-col gap-5 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold">{`Mweeeeeeeee jangan dikecilin`}</h1>
            <h1 className="text-xl">{`Saia mager bikin responsive nya ehek`}</h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-[#474284] hidden lg:block">
        <Navbar />
        <div className="w-screen mt-10 flex flex-col items-center">
          <div className="flex flex-col gap-5 text-center mb-10">
            <h1 className="text-white font-bold text-5xl">{`GACHA KADO? :>`}</h1>

          </div>

          <div className="bg-[#5a53ad] p-10 shadow-lg flex gap-10 rounded-lg">
            {data.map((item) => (
              <GiftCard
                key={item.id}
                open={selectedCards.some((card) => card.id === item.id)}
                onClick={() => handleClickBox(item.id)}
              >
                {selectedCards.some((card) => card.id === item.id) && counts[item.id] === 1 && item.result}
              </GiftCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
