import Head from "next/head"

export default function MetaHead(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.title} - lalaland.com</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="id_ID" />

        <meta name="twitter:card" content="How to Become an SEO Expert (8 Steps)" />
        <meta name="twitter:site" content="@nytimesbits" />
        <meta name="twitter:creator" content="@nickbilton" />
      </Head>
    </>
  )
}