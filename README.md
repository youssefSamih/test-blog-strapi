## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `src/lib/api` directory is mapped to `/api`.

## Install strapi backend in local

create local backend for strapi with this. template by runing this command

be sure to run the local backend in 1337 or just add localhost link with port in env file

```bash
yarn create strapi-app backend --quickstart --template https://github.com/strapi/strapi-template-blog
```

after that run this command to start the backend server

```bash
yarn start
```

or if you have deployed strapi backend just add the url to env file

NEXT_PUBLIC_STRAPI_API_URL=YOUR_URL
