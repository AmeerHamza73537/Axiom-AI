
import { useTRPC } from "@/trpc/client"
import { caller, getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query"
import { Client } from "./client"
import { Suspense } from "react"
const Page = async () => {
  // const trpc = useTRPC()
  // const data  = await caller.hello({text: "from the client!"})
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text: "from the client!"}))
  return(
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <div> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Client/>
        </Suspense>
        
        {/* {JSON.stringify(data)} */}
        {/* <Button>Helloooooo</Button> */}
      {/* </div> */}
    </HydrationBoundary>
  )
}
export default Page