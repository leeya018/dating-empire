"use client"
import Title from "@/ui/title"
import { observer } from "mobx-react-lite"
import Nav from "@/components/nav"
import Image from "next/image"
import productsData from "@/data/products"
import { useState } from "react"

type Product = {
  image: string
  description: string
  title: string
}

const ProductsPage = observer(() => {
  const [chosenDesc, setChosenDesc] = useState<string>("")
  const [chosenTitle, setChosenTitle] = useState<string>("")

  return (
    <div className="h-[100vh]">
      <Nav />
      <div className="flex justify-between items-center h-full">
        <ul className="h-full overflow-y-scroll  no-scrollbar w-[50%] pb-40">
          {productsData.map((product: Product, key: number) => (
            <li
              onClick={() => {
                setChosenDesc(product.description)
                setChosenTitle(product.title)
              }}
              key={key}
              className="flex flex-col justify-start hover:bg-color-hover-gray
            cursor-pointer p-2 group"
            >
              <Title>{product.title}</Title>

              <Image
                alt="product1"
                width={200}
                height={400}
                className="group-hover:scale-105 group-hover:translate-y-2  ease-in-out duration-200"
                src={product.image}
              />
            </li>
          ))}
        </ul>
        <div className="pl-5 w-[50%] h-full flex flex-col overflow-y-scroll no-scrollbar">
          <Title>{chosenTitle}</Title>

          <div className=" " dangerouslySetInnerHTML={{ __html: chosenDesc }} />
        </div>
      </div>
    </div>
  )
})

export default ProductsPage
