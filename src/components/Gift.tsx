import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GiftCard from "./GiftCard";

const Gift = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (count === 1) {
      setValue(data[0].result);
    } else if (count === 2) {
      setValue(data[1].result);
    } else if (count >= 3) {
      setValue(data[2].result);
    }
  }, [count]);

  const handleClickBox = (id: number) => {
    setSelected(id);
    setCount(count + 1);
  };

  const data = [
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
          <button className="w-full py-2 bg-[#f3b84f]/50 rounded-full text-white font-semibold text-lg">{`hore`}</button>
        </>
      ),
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#474284]">
      <Navbar />
      <div className="w-screen mt-10 flex flex-col items-center">
        <div className="flex flex-col gap-5 text-center mb-10">
          <h1 className="text-white font-bold text-5xl">CLAIM YOUR GIFT</h1>
          <div>
            <p className="text-white font-normal text-lg">
              Click on one of the buttons to claim!
            </p>
            <p className="text-white font-normal text-lg">
              But choose wisely... you only have <b>ONE</b> chance.
            </p>
          </div>
        </div>

        <h1 className="text-white">Count: {count}</h1>
        <div className="bg-[#5a53ad] p-10 shadow-lg flex gap-10 rounded-lg">
          {data.map((item) => (
            <GiftCard
              key={item.id}
              open={selected === item.id}
              onClick={() => handleClickBox(item.id)}
            >
              {value}
            </GiftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gift;
