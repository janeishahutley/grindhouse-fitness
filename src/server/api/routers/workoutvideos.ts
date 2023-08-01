import { z } from "zod";
import { supabase } from "no/server/api/trpc";
import {
  createTRPCRouter,
  publicProcedure,
} from "no/server/api/trpc";
import type { PostgrestResponse } from "@supabase/supabase-js";
interface Video {
    url: string,
    name: string,
    createdAt?:string,
}

/**
 * 
 *  TODO: new schema for programs - how can we set up SQL schema for programs
 *  where many videos belong to one program
 *  come up with a general schema for this 
 * 
 * Get the router below working and investigate supabase queries and rpc
 */

export const videosRouter = createTRPCRouter({

  getVideos: publicProcedure.query(async(): Promise<Video[]> => {

    const {data, error}: PostgrestResponse<Video> = await supabase.from('videos').select("*")
    
    if(error) throw error
    return data

  })

});
