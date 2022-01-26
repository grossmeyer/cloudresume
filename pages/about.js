import CustomHead from '../components/CustomHead.js'

export default function About() {
  return (
    <>
      <CustomHead headTitle="About Glenn's Resume" headDescription="How Glenn's Resume Was Created" headPage='/about' />
      <main>
        <h1 className="text-3xl font-bold underline">
          How this was made
        </h1>
      </main>
    </>
  )
}