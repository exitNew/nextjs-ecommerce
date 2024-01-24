import MetaHead from "@/components/MetaHead";

export default function ProductDetail({data}) {
  console.log(data)
  return (
    <>
      <section>
      <MetaHead
        title={data.title}
        description={data.description}
        image={data.image}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}/product/${data.id}`}
      />
        <h1>{data.title}</h1>
        <div>{data.category}</div>
        <div>{data.price}</div>
        <div>
          <img src={data.image} alt={data.title} width={200}></img>
        </div>
        <p>{data.description}</p>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  // SSR
  // console.log('context', context)

  // cara 1
  // const {locale, query:{id} } = context

  // cara 2
  const id = context.query.id;
  const locale = context.locale;

  console.log('locale', locale)
  console.log('query ', id)


  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`);
  const data = await response.json()


  return {
    props: { data: data }
  }
}
