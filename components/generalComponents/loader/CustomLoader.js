 
'use client'

import { faSpinner } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 

export default function CustomLoader() {

  return (
        <div className=" h-full w-full fixed top-0 right-0 left-0 bottom-0 blur-md bg-white opacity-75">
            <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
  )
}
