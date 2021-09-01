import React from "react"
import HashPreview from "./hash-preview"
import { ExternalLinkIcon } from "@heroicons/react/solid"

const BulletTransferFromTo = ({ event }) => {
  return (
    <div className="col1 bullet-content  flex items-center justify-start space-x-7 ">
      <div className={event.styleClass + " h-20 w-20"}> </div>
      <div className="produced  w-24 hidden md:block items-start">
        <div className="text-gray-400 text-xs flex items-center justify-start">
          <a href={event.transactionLink} target="_blank" rel="noopener noreferrer">
            Etherscan
          </a>
          <a href={event.transactionLink} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="mx-auto h-4 w-4    text-gray-400 inline-block" />
          </a>
        </div>

        <div className="text-foodprint-100 text-xs">Transfer from</div>
      </div>
      <div className="name hidden md:block">
        <div className="label w-40">
          {event.fromName}, {event.fromCountry}
        </div>
        <div className="hash mt-1    ">
          <HashPreview hash={event.from} />
        </div>
      </div>

      <div className="produced text-foodprint-100 text-xs">to</div>

      <div className="name ">
        <div className="label w-40">
          {event.toName}, {event.toCountry}
        </div>
        <div className="hash mt-1    ">
          <HashPreview hash={event.to} />
        </div>
      </div>
    </div>
  )
}

export default BulletTransferFromTo
