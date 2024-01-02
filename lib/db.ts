import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// This is for not to initiate too many prisma clients when working on development mode
// NextJS hot-reload will attempt to create too many Prisma Clients, avoid this by adding
// to global and then calling it back when reload
// Global is not affected by hot-reload
