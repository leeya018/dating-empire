import { FC, useEffect, useState } from "react"
import Image from "next/image"

let interval: any = null

type ImageProps = {
  isShowImage: boolean
  setIsShowImage: any
}
const ImageShow: FC<ImageProps> = ({ setIsShowImage, isShowImage }) => {
  useEffect(() => {
    if (isShowImage) {
      let i = 0
      interval = setTimeout(() => {
        setIsShowImage(false)
      }, 2000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isShowImage])

  return (
    // <>
    //   <button onClick={() => setIsShowImage(true)}>now </button>
    <div
      className={`absolute inset-0 h-[100vh] 
      ${isShowImage ? "block" : "hidden"}
      `}
    >
      <Image
        src={"/images/women.png"}
        alt=" women image"
        className={`relative top-1/4 mx-auto transition-transform duration-1000 ease-in-out ${
          isShowImage ? "scale-150" : "scale-100"
        }`}
        width={200}
        height={200}
      />
    </div>
    // </>
  )
}

export default ImageShow
