import CustomHead from 'components/CustomHead.js'
import Layout from 'components/Layout'
import ViewCounter from 'components/ViewCounter'

export default function Home() {
  return (
    <>
      <CustomHead headTitle='glennmeyer.dev' headDescription="Glenn Meyer's Website" />
      <Layout />
      <main className='flex flex-col md:flex-row justify-center mt-5 font-main'>
        <aside className='md:sticky top-32 w-1/8 h-full mt-12 md:ml-4 py-4 px-8 bg-sky-700 shadow-xl'>
          {/* Profile Picture */}
          <section className='flex items-center justify-center mb-10'>
            {/* Not using next/image due to incompability with next export */}
            <img src='/avatar.webp' alt='Stylized avatar of Glenn Meyer' width='128' height='139' className='w-32' />
          </section>
          {/* Contact Section */}
          <section className='text-slate-100'>
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Contact
            </h2>
            <hr className='mb-5 w-1/6' />
            <p className='md:text-sm text-lg hover:text-sky-300 mb-2'><a href='mailto:glenn@glennmeyer.dev'>glenn@glennmeyer.dev</a></p>
            <section className='flex flex-row'>
              <a href='https://www.linkedin.com/in/glenn-meyer-93a58583/' aria-label='Connect with Glenn on LinkedIn'>
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-xl'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg>
              </a>
              <a href='https://www.twitter.com/grossmeyer' aria-label='Connect with Glenn on Twitter'>
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-xl'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' /></svg>
              </a>
              <a href='https://github.com/grossmeyer' aria-label="Check out Glenn's source code on GitHub">
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-full'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
              </a>
            </section>
          </section>

        </aside>
        <article className='md:w-7/12 w-auto h-auto p-10'>
          <h1 className='text-sky-800 text-3xl font-semibold'>Glenn Meyer</h1>
          <p>Change Agent driving organizations towards agile development, cloud computing, automation, and embracing DevOps philosophy</p>
          {/* Skills Section */}
          <section>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Skills
            </h2>
            <hr className='mb-5 w-1/6' />
            <ul className='list-disc'>
              <li className='text-sm ml-4'>Enterprise Systems Architecture</li>
              <li className='text-sm ml-4'>Agile Software Development and Project Management</li>
              <li className='text-sm ml-4'>Networking (Routing and Switching)</li>
              <li className='text-sm ml-4'>Information Security (Firewalls and Application Security)</li>
              <li className='text-sm ml-4'>Virtualization (VMware and Hyper-V)</li>
              <li className='text-sm ml-4'>Workstation and Server Management (Windows and Linux)</li>
              <li className='text-sm ml-4'>AWS Lambda and DynamoDB</li>
              <li className='text-sm ml-4'>Programming (Javascript/Go/Python)</li>
              <li className='text-sm ml-4'>Technical Documentation (Visio/Markdown)</li>
            </ul>
          </section>
          {/* Certifications Section */}
          <section>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Certifications
            </h2>
            <hr className='mb-5 w-1/6' />
            <p className='text-sm'>Certified Kubernetes Administrator</p>
            <p className='text-sm'>AWS Solutions Architect - Associate</p>
            <p className='text-sm'>Certified ScrumMaster</p>
          </section>
          {/* Education Section */}
          <section>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Education
            </h2>
            <hr className='mb-5 w-1/6' />
            <h3>BBA - Management</h3>
            <p className='text-sm'>Cleveland State University</p>
          </section>
        </article>
      </main>
      <ViewCounter />
    </>
  )
}