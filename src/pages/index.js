import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MetaHead from '@/components/MetaHead'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // print inside router 
  const router = useRouter()
  // console.log('router', router)

  const { locale } = router
  // console.log('locale', locale)


  console.log("ENV", process.env.NEXT_PUBLIC_HOST_NAME)


  // change page
  const onRedirect = () => {
    // router push dipakai dalam function seperti error langsung redirect ke 404
    router.push('/about')
  }

  // fetch API CSR method
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProduct = async () => {
    setIsLoading(true)
    const response = await fetch(process.env.NEXT_PUBLIC_HOST_API+'/products');
    const data = await response.json()

    setProduct(data)
    // console.log('data', data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (isLoading) return 'Loading...'

  return (
    <>
      <MetaHead
        title="Home"
        description="Ini adalah halaman Home"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={process.env.NEXT_PUBLIC_HOST_NAME}
      />
      {/* <h1>{locale == 'id-ID' ? 'Belajar NextJS' : 'Learn NextJS'}</h1>

      <button onClick={onRedirect}>
        Ke About
      </button>

      <ul>
        <li>
          <Link href={"/menu/detail/12"}>Pizza Tuna</Link>
        </li>
        <li>
          <Link href={"/menu/detail/pizza-tuna/12"}>Pizza Tuna Lagi</Link>
        </li>
      </ul> */}

      <section className='product-list'>
        {product.map((value) => (
          <div className='item' key={value.id}>
            <div className='image'>
              <img src={value.image} alt={value.title} width={200} />
            </div>
            <div>
              <h2>{value.title}</h2>
              <Link href={`/product/${value.id}`}>Selengkapnya</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
