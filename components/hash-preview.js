import React from "react"

const HashPreview = ({ hash }) => {
  const hashShortener = fullHash => {
    if (fullHash) {
      const preview = fullHash.slice(0, 5) + "..." + fullHash.slice(38, 41)
      return preview.toUpperCase()
    }

    return ""
  }

  // const handleClick = h => {
  //   navigator.clipboard.writeText(h)
  // }

  const hashShort = hashShortener(hash)

  return <span className="text-center hash-text rounded-md  text-foodprint-100  text-xs bg-foodprint-70 p-1 px-2">{hashShort}</span>
}

export default HashPreview
