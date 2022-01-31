import CustomHead from '../components/CustomHead'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <CustomHead headTitle="About Glenn's Resume" headDescription="How Glenn's Resume Was Created" headPage='/about' />
      <Layout />
      <main>
        <h1 className="text-3xl font-bold underline">
          How this website was made
        </h1>
      </main>
    </>
  )
}