# [Authentication Next Auth V5](https://www.youtube.com/watch?v=1MTyCvS05V4)

## [Shadcn UI](https://ui.shadcn.com/)

```bash
npx shadcn-ui@latest init

npx shadcn-ui@latest add button
npx shadcn-ui@latest add card

npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
```

## a nice radiant with tailwind

```html
<main
  className="flex h-full flex-col items-center justify-center 
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
></main>
```

## Database Ops

```bash
npm i -D prisma
npm i @prisma/client
npm i @auth/prisma-adapter   # for next auth prisma adaptor 

npx prisma init
# make changes # create models
npx prisma generate
npx prisma db push

# hash pw
npm i bcrypt
npm i -D @types/bcrypt # types not delivered by default

# bcrypt alternative for potential errors
npm i bcryptjs
npm i -D @types/bcryptjs
```

[Neon Tech -> free psql provider](https://neon.tech/)<br />
[Next Auth v4](https://authjs.dev/)<br/>
[Prisma ORM](https://www.prisma.io/)<br/>
