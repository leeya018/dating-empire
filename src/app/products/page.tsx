"use client"
import Title from "@/ui/title"
import { observer } from "mobx-react-lite"
import Nav from "@/components/nav"
import Image from "next/image"
import productsData from "@/data/products"

type Product = {
  image: string
  description: string
  title: string
}

const maxTxt = 1000

// const productDescription = `Unlock the Secrets to <strong>Dating Success</strong> with <em>'Best Dating Mindset'</em> – your ultimate guide to navigating the complex world of dating with confidence, clarity, and a winning strategy.<br><br><h2>Why 'Best Dating Mindset'?</h2>In the world of dating, your mindset is your most powerful tool. "Best Dating Mindset" is not just another dating advice book; it's a revolutionary approach to help you cultivate a positive, resilient mindset that attracts love and keeps it. This book is designed to empower you, whether you're entering the dating scene for the first time or looking to enhance your existing relationships.<br><br><strong>What You'll Discover Inside:</strong><ul><li>The Power of Mindset: Learn how to shift your mindset to attract the relationships you desire. Understand the psychology of attraction and how your thoughts and beliefs shape your dating experiences.</li><li>Self-Love and Confidence: Uncover the secrets to building self-esteem and confidence that radiates, making you irresistible to potential partners. Discover the importance of self-love in finding and sustaining healthy relationships.</li><li>Effective Communication Strategies: Master the art of communication to express your needs and desires clearly and confidently. Learn how to read verbal and non-verbal cues to build deeper connections.</li><li>Overcoming Dating Challenges: Navigate the common pitfalls and challenges of dating with practical advice and strategies. Learn how to handle rejection, ghosting, and other disappointments with grace and resilience.</li><li>Creating Lasting Connections: Move beyond superficial encounters to create meaningful, lasting relationships. Understand what it takes to build a strong foundation for a relationship that endures.</li></ul><strong>Who Should Read 'Best Dating Mindset'?</strong><br>This book is for anyone who wants to change their dating experiences for the better. Whether you're single and searching, recovering from a breakup, or in a relationship and looking to rekindle the spark, 'Best Dating Mindset' offers valuable insights and practical advice to help you achieve your relationship goals.<br><br><em>Your Best Love Story Starts Now.</em>`
const ProductsPage = observer(() => {
  const truncateText = (text: string) => {
    if (text.length <= maxTxt) return text
    return `${text.substring(0, maxTxt)}...`
  }

  return (
    <div className="h-[100vh]">
      <Nav />
      <ul className="h-full overflow-scroll">
        {productsData.map((product: Product, key: number) => (
          <li
            key={key}
            className="flex justify-left
           items-center  cursor-pointer p-2 group"
          >
            <div className="flex flex-col w-[40%] group-hover:bg-color-disabled-gray group-hover:bg-opacity-10 ease-in-out duration-200">
              <Title>{product.title}</Title>
              {/* 
              <div
                className="mt-2 truncate"
                dangerouslySetInnerHTML={{
                  __html: truncateText(product.description),
                }}
              /> */}
            </div>
            <Image
              alt="product1"
              width={200}
              height={400}
              className="group-hover:scale-105 group-hover:rotate-3 ease-in-out duration-200"
              src={product.image}
            />
          </li>
        ))}
      </ul>
    </div>
  )
})

export default ProductsPage
