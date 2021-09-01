import { useRouter } from "next/router"
import SpinnerSyncLoader from "/components/spinner-syncloader"

const demoPage = props => {
  const router = useRouter()
  const { name } = router.query
  return (
    <>
      <div className="dashboard w-full">
        <p className="text-xl text-gray-200">Hello world</p>
        <p>Welcome {name}</p>
      </div>
      <div>
        <SpinnerSyncLoader loading={true} />
      </div>
    </>
  )
}

export default demoPage
