import React from 'react'
import { WatchListRibbon, WatchListRibbonIcon } from "../utils/svgs"

const WatchRibbonGroup = ({...restProps}) => {
  return (
    <div {...restProps}>
      <WatchListRibbon className={`opacity-70`} width="50" height="50" />
      <WatchListRibbonIcon className="absolute" width="30" height="30" />
    </div>
  );
}

export default WatchRibbonGroup