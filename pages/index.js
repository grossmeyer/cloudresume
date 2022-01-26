import CustomHead from '../components/CustomHead.js'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <CustomHead headTitle='Cloud Resume - Glenn Meyer' headDescription="Glenn Meyer's Cloud Resume" />
      <Layout />
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </>
  )
}