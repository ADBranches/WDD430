import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import authConfig from './auth.config';

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is missing. Fix .env.local first.');
}

const sql = postgres(process.env.POSTGRES_URL, {
  ssl: process.env.POSTGRES_URL.includes('localhost') ? false : 'require',
});

type DbUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

async function getUser(email: string): Promise<DbUser | undefined> {
  try {
    const users = await sql<DbUser[]>`
      SELECT id, name, email, password
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;

    return users[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);

        if (!user) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
});