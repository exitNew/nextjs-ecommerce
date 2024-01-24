import { useRouter } from "next/router"
import { useEffect } from "react"

export default function DetailMenu() {
  const router = useRouter()

  // console.log('Apa isi router', router)

  const { id } = router.query

  useEffect(() => {
    if(!id) return
    console.log('isi router query ', id)
  }, [router.query])

  return (
    <>
      <section>
        Ini detail menu
      </section>
    </>
  )
}
