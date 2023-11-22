// This file contains type definitions for data.

export type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export interface Session {
  user: User;
  expires: string;
}