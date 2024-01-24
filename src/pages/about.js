import MetaHead from "@/components/MetaHead"
import Head from "next/head"

export default function About() {
  return (
    <>
      <MetaHead
        title="About Us"
        description="Ini adalah halaman About"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={process.env.NEXT_PUBLIC_HOST_NAME}
      />
      <section>
        <h1>About Us</h1>
      </section>

    </>
  )
}