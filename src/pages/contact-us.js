import MetaHead from "@/components/MetaHead"

export default function ContactUs() {
  return (
    <>
      <MetaHead
        title="Contact Us"
        description="Ini adalah halaman Contact"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={process.env.NEXT_PUBLIC_HOST_NAME}
      />
      <section>
        <h1>Contact Us</h1>
      </section>
    </>
  )
}