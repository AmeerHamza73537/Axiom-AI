'use client'

import { useTRPC } from "@/trpc/client"
import { Button } from "@base-ui/react"
import { useMutation } from "@tanstack/react-query"

// import { useTRPC } from "@/trpc/client"
// import { caller, getQueryClient, trpc } from "@/trpc/server"
// import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query"
// import { Client } from "./client"
// import { Suspense } from "react"
// const Page = async () => {
//   // const trpc = useTRPC()
//   // const data  = await caller.hello({text: "from the client!"})
//   const queryClient = getQueryClient()
//   void queryClient.prefetchQuery(trpc.hello.queryOptions({text: "from the client!"}))
//   return(
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       {/* <div> */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Client/>
//         </Suspense>
        
//         {/* {JSON.stringify(data)} */}
//         {/* <Button>Helloooooo</Button> */}
//       {/* </div> */}
//     </HydrationBoundary>
//   )
// }
// export default Page


const Page = () => {
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  
  return (
    <div>
      <Button onClick={()=> invoke.mutate({text: "John"})}>
        Invoke Background Job
      </Button>
    </div>
  )
}
export default Page