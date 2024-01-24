import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <header className="bg-slate-500 text-3xl">
        <Link href={'/'}>
          <img src="/images/logo/nike.svg" alt="nike logo" width={50} />
        </Link>
        <Link href={'/about'}>{locale == 'id-ID' ? 'Tentang kami' : 'About'}</Link>
        <Link href={'/contact-us'}>{locale == 'id-ID' ? 'Kontak kami' : 'Contact Us'}</Link>
        <Link href={'/menu/makanan'}>{locale == 'id-ID' ? 'Makanan kami' : 'Our Food'}</Link>
        <Link href={'/menu/minuman'}>{locale == 'id-ID' ? 'Minuman kami' : 'Our Drink'}</Link>
      </header>
    </>
  )
}