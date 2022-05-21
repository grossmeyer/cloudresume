import CustomHead from '../components/CustomHead'
import FL from '../components/FancyLink'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <CustomHead headTitle="About Glenn's Resume" headDescription="How Glenn's Resume Was Created" headPage='/about' />
      <Layout />
      <main className='flex flex-col justify-center font-main'>
        <article className='w-auto h-auto mt-2 py-4 px-12'>
          <h2 className='font-semibold uppercase tracking-wider mt-6 mb-2 text-slate-500 text-2xl'>
            About This Website
          </h2>
          <p className='my-2'>
            This is Glenn Meyer's resume, created based on the parameters specified by Forrest Brazeal on the <FL href='https://cloudresumechallenge.dev/docs/the-challenge/aws/' aria='Cloud Resume Challenge dot dev' text='Cloud Resume Challenge website' />. My implementation is a <FL href='https://nextjs.org/' aria='Next JS dot org' text='Next.js' /> project bootstrapped with <FL href='https://github.com/vercel/next.js/tree/canary/packages/create-next-app' aria='Create Next app' text='create-next-app' />.
          </p>

          <p className='my-2'>
            Styles are created using <FL href='https://tailwindcss.com/' aria='TailwindCSS' text='TailwindCSS' />. You can easily get started with Next.js and TailwindCSS by following the <FL href='https://tailwindcss.com/docs/guides/nextjs' aria='TailwindCSS guide for NextJS' text='documentation here' />.
          </p>

          <p className='my-2'>
            Static html is exported from Next.js using <FL href='https://nextjs.org/docs/advanced-features/static-html-export' aria='NextJS Static HTML Export' text='next export' /> and is hosted on <FL href='https://aws.amazon.com/s3/' aria='AWS S3' text='AWS S3' /> with <FL href='https://aws.amazon.com/cloudfront/' aria='AWS Cloudfront' text='CloudFront' />] for cheap and excellent performance. DNS is handled using <FL href='https://www.namecheap.com/' aria='Namecheap Domain Name Registration' text='NameCheap' />.
          </p>

          <h3 className='text-slate-800 font-semibold text-xl mt-6 mb-2'>Work in progress...</h3>

          <p className='my-2'>
            The view counter at the bottom is powered by <FL href='https://aws.amazon.com/lambda/' aria='AWS Lambda' text='[AWS Lambda' /> and is written in <FL href='https://go.dev/' aria='Go Programming Language' text='Go' />; this is a point where I diverge from Forrest's suggestion to use Python. The Lambda function receives requests via an <FL href='https://aws.amazon.com/api-gateway/' aria='AWS API Gateway' text='AWS API Gateway' />which reads and writes the counter value from <FL href='https://aws.amazon.com/dynamodb/' aria='AWS DynamoDB' text='AWS DynamoDB' />. All of the AWS architecture is deployed via <FL href='https://aws.amazon.com/cloudformation/' aria='AWS CloudFormation' text='AWS CloudFormation' /> templates and is versioned in source control using <FL href='https://git-scm.com/' aria='Git Source Control Management' text='Git' />. You can view the source on Glenn's Github repository <FL href='https://github.com/grossmeyer/resume' aria='Glenn Meyer Github Repository' text='here' />.
          </p>

        </article>
      </main>
    </>
  )
}