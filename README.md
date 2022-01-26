# Read Me

This is Glenn Meyer's resume. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Styles are created using [TailwindCSS](https://tailwindcss.com/). You can easily get started with Next.js and TailwindCSS by following the [documentation here](https://tailwindcss.com/docs/guides/nextjs).

The static html is exported from Next.js using [next export](https://nextjs.org/docs/advanced-features/static-html-export) and is hosted on AWS S3 with CloudFront for cheap and excellent performance. DNS is handled using NameCheap. You can see the live resume on [Glenn's website](https://resume.glennmeyer.dev).

The view counter at the bottom is powered by [AWS Lambda](https://aws.amazon.com/lambda/) and is written in [Go](https://go.dev/). The Lambda function receives requests via an [AWS API Gateway](https://aws.amazon.com/api-gateway/) which reads and writes the counter value from [AWS DynamoDB](https://aws.amazon.com/dynamodb/). All of the AWS architecture is deployed via [AWS CloudFormation](https://aws.amazon.com/cloudformation/) templates and is versioned in source control using [Git](https://git-scm.com/). You are likely reading this from Glenn Meyer's Github repository, but if not you can find the source [here](https://github.com/grossmeyer/resume).
