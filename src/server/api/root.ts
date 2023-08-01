import { exampleRouter } from "no/server/api/routers/example";
import { createTRPCRouter } from "no/server/api/trpc";
import { videosRouter } from "./routers/workoutvideos";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  video: videosRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
