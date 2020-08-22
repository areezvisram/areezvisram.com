import React from "react"

const GooglePlay = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 408 466.9"
      className={style}
    >
        <title>Google Play</title>
      <path
        d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z"
        className="upper"
      />
      <path
        d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z"
        className="left"
      />
      <path
        d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"
        className="right"
      />
      <path
        d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z"
        className="lower"
      />
    </svg>
  )
}

export default GooglePlay
