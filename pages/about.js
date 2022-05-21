import CustomHead from '../components/CustomHead'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <CustomHead headTitle="About Glenn's Resume" headDescription="How Glenn's Resume Was Created" headPage='/about' />
      <Layout />
      <main className='flex flex-col justify-center mt-5 font-main'>
        <h1 className="text-3xl font-bold underline">
          About This Website
        </h1>
        <article className='md:w-7/12 w-auto h-auto mt-3 p-10'>
          <p>
            This is Glenn Meyer's resume, created based on the parameters specified by Forrest Brazeal on the [Cloud Resume Challenge website](https://cloudresumechallenge.dev/docs/the-challenge/aws/). My implementation is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
          </p>

          <p>
            Styles are created using [TailwindCSS](https://tailwindcss.com/). You can easily get started with Next.js and TailwindCSS by following the [documentation here](https://tailwindcss.com/docs/guides/nextjs).
          </p>

          <p>
            The static html is exported from Next.js using [`next export`](https://nextjs.org/docs/advanced-features/static-html-export) and is hosted on [AWS S3](https://aws.amazon.com/s3/) with [CloudFront](https://aws.amazon.com/cloudfront/) for cheap and excellent performance. DNS is handled using [NameCheap](https://www.namecheap.com/). You can see the live resume on [Glenn's website](https://resume.glennmeyer.dev).
          </p>

          <h2 className='uppercase tracking-widest text-lg font-bold'>TBD</h2>

          <p>
            The view counter at the bottom is powered by [AWS Lambda](https://aws.amazon.com/lambda/) and is written in [Go](https://go.dev/); this is a point where I diverge from Forrest's suggestion to use Python. The Lambda function receives requests via an [AWS API Gateway](https://aws.amazon.com/api-gateway/) which reads and writes the counter value from [AWS DynamoDB](https://aws.amazon.com/dynamodb/). All of the AWS architecture is deployed via [AWS CloudFormation](https://aws.amazon.com/cloudformation/) templates and is versioned in source control using [Git](https://git-scm.com/). You are likely reading this from Glenn Meyer's Github repository, but if not you can find the source [here](https://github.com/grossmeyer/resume).
          </p>

        </article>
      </main>
    </>
  )
}