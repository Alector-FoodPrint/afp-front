import { useState } from "react"
import { css } from "@emotion/react"
import SyncLoader from "react-spinners/SyncLoader"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 15 auto;
  border-color: red;
`

function Spinner({ loading }) {
  let [color, setColor] = useState("#E6E3F2")

  return (
    <div className="sweet-loading">
      <SyncLoader color={color} loading={loading} css={override} size={15} />
    </div>
  )
}

export default Spinner
