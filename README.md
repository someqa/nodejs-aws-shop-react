*What was done:*
1. 30 points - S3 Hosting - S3 bucket has been created and configured properly. The app has been uploaded to the bucket and is available though the Internet.

Link to the home page: https://rs-school-s3-only-someqa.s3.eu-north-1.amazonaws.com/index.html (see the header, it's changed)

2. 40 points - Cloudfront - In addition to the previous work a CloudFront distribution is created and configured properly and the site is served now with CloudFront and is available through the Internet over CloudFront URL, not S3-website link (due to changes in bucket’s policy...). (Link to CloudFront website is provided. S3-website shows 403 Access Denied error. There is no Pull Request in the YOUR OWN frontend repository.)

Link to CloudFront distribution - https://d20tnuzhanhmhu.cloudfront.net/
Link to the corresponding S3 bucket - https://someqa-rsschool-task2-manual.s3.eu-north-1.amazonaws.com/index.html

3. Deployment with CDK. 0 points. I tried to do it not with outdated aws-cdk, but with aws-cdk-lib package, and I did not have enough time to debug the code to make it work due to the situation not related to the course. So... a bit more work for me to dive deeper during the next task, and a much quicker cross-check for you. :) 

Thanks for the check and good luck! :)

# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.
