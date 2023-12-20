import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

const sushi_num = 4


function SushiContainer({sushis, eatSushi}) {

const [sushiIndex, setSushiIndex] = useState(0);

function scrollBelt() {
  setSushiIndex(sushiIndex + sushi_num);
}

  return (
    <div className="belt">
      {sushis
      .slice(sushiIndex, sushi_num + sushiIndex)
      .map(sushi => ( <Sushi sushi={sushi} handleClick={eatSushi} key={sushi.id} /> ))}
      <MoreButton handleClick={scrollBelt}/>
    </div>
  );
}

export default SushiContainer;
