import CustomHead from '../components/CustomHead.js'

export default function Home() {
  return (
    <>
      <CustomHead headTitle='Cloud Resume - Glenn Meyer' headDescription="Glenn Meyer's Cloud Resume" />
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </>
  )
}