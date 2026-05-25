    https://www.prisma.io/docs/prisma-orm/quickstart/postgresql#8-write-your-first-query

1. 
        npm init
        npm install typescript tsx @types/node --save-dev
        npx tsc --init

2. 
        create .ignore
        (node_modules
        .env
        dist
        build
        .DS_Store
        )

3. 
        npm install prisma @types/pg --save-dev
        npm install @prisma/client @prisma/adapter-pg pg dotenv


4. 
        Go to tsconfig.json
            {
                "compilerOptions": {
                    "module": "ESNext",
                    "moduleResolution": "bundler",
                    "target": "ES2023",
                    "strict": true,
                    "esModuleInterop": true,
                    "ignoreDeprecations": "6.0"
                }
            }
        

5.      Update package.json to enable ESM:
        {
            "type": "module"
        } 

6.      Initialize Prisma ORM
        npx prisma 
        npx prisma init --datasource-provider postgresql --output ../generated/prisma 

        updater this name and password (go to .env)
        DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

7.     Define your data model(go to schema.prisma)

        model User { 
        id    Int     @id @default(autoincrement()) 
        email String  @unique
        name  String?
        posts Post[]
        } 
        model Post { 
        id        Int     @id @default(autoincrement()) 
        title     String
        content   String?
        published Boolean @default(false) 
        author    User    @relation(fields: [authorId], references: [id]) 
        authorId  Int
        } 

        npx prisma migrate dev  
        npx prisma generate



9.      Instantiate Prisma Client

        create lib/prisma.ts
        
            import "dotenv/config";
            import { PrismaPg } from "@prisma/adapter-pg";
            import { PrismaClient } from "../generated/prisma/client";

            const connectionString = `${process.env.DATABASE_URL}`;

            const adapter = new PrismaPg({ connectionString });
            const prisma = new PrismaClient({ adapter });

            export { prisma };



10.         Create a script.ts 


            import { prisma } from "./lib/prisma";

            async function main() {
            // Create a new user with a post
            const user = await prisma.user.create({
                data: {
                name: "Alice",
                email: "alice@prisma.io",
                posts: {
                    create: {
                    title: "Hello World",
                    content: "This is my first post!",
                    published: true,
                    },
                },
                },
                include: {
                posts: true,
                },
            });
            console.log("Created user:", user);

            // Fetch all users with their posts
            const allUsers = await prisma.user.findMany({
                include: {
                posts: true,
                },
            });
            console.log("All users:", JSON.stringify(allUsers, null, 2));
            }

            main()
            .then(async () => {
                await prisma.$disconnect();
            })
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
                process.exit(1);
            });       


        npx tsx script.ts


11.     Explore your data with Prisma Studio 
        npx prisma studio






------------------------------------------------------------------------------------

12.     create crud.ts
        

npx prisma migrate dev --create-only  
npx prisma migrate reset     
npx prisma migrate dev --name add_name_field 
npx prisma migrate dev 

![alt text](image.png)