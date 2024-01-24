import { useRouter } from "next/router"
import { useEffect } from "react"

export default function DetailMenuSlug() {
  const router = useRouter()

  console.log('Apa isi router', router)

  // const { id } = router.query
  // destructuring assignment
  

  useEffect(() => {
    // if(!id) return
    // console.log('isi router query ', id)

    if(!router.query.slug) return
    const [slugName, idMenu] = router.query.slug
    console.log("slugName, idMenu",slugName, idMenu)
  }, [router.query])

  return (
    <>
      <section>
        Ini detail menu
      </section>
    </>
  )
}
