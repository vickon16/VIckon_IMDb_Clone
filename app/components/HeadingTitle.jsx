import React from 'react'
import { ChevronRight } from '../utils/svgs';

const HeadingTitle = ({title, subTitle, paragraphText, icon}) => {
  return (
    <div>
      {title && 
        <h1 className="text-clampLg text-amber-600 dark:text-btnYellow leading-loose font-bold mb-4">
          {title}
        </h1>
      }

      {subTitle && <h2 className="text-clampMd font-bold flex items-center border-l-4 px-3 border-l-amber-600 dark:border-l-btnYellow cursor-pointer group w-fit">
        {subTitle}
        {icon && (
          <ChevronRight
            width="18"
            height="18"
            className="ml-2 group-hover:text-btnYellow"
          />
        )}
      </h2>}

      {paragraphText && (
        <p className="my-3 dark:text-bgWhite2 text-base">{paragraphText}</p>
      )}
    </div>
  );
}

export default HeadingTitle