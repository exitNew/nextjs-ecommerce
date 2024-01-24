import MetaHead from "@/components/MetaHead";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [data, setData] = useState();
  const router = useRouter();

  const fetchDataProducts = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json()

    setData(product)
  }

  useEffect(() => {
    if (router.query.id) {
      fetchDataProducts(router.query.id)
    }
  }, [router])

  // jika csr, 
  // if (!data) return "Loading...";

  return (
    <>
      <section>
        <MetaHead
          title={data?.title}
          description={data?.description}
          image={data?.image}
          url={`http://localhost:3000/product/${data?.id}`}
        />
        <h1>{data?.title}</h1>
        <div>{data?.category}</div>
        <div>{data?.price}</div>
        <div>
          <img src={data?.image} alt={data?.title} width={200}></img>
        </div>
        <p>{data?.description}</p>
      </section>
    </>
  )
}

// export async function getServerSideProps(context) {
//   // SSR
//   // console.log('context', context)

//   // cara 1
//   // const {locale, query:{id} } = context

//   // cara 2
//   // const id = context.query.id;
//   // const locale = context.locale;

//   // console.log('locale', locale)
//   // console.log('query ', id)


//   // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   // const data = await response.json()


//   return {
//     props: { data: data }
//   }
// }
