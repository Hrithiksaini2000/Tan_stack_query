import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchusers } from "../API/api"
import { useEffect } from "react"

export const Infinitescroll = () => {

    const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchusers,
        getNextPageParam: (lastpage, allpages) => {
            console.log("Last Page", lastpage, allpages)
            return lastpage.length === 10 ? allpages.length + 1 : undefined
        }
    })
    console.log(data)

    const handlescroll=()=>{
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1

        if(bottom && hasNextPage){
            fetchNextPage()
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handlescroll)
        return () => window.removeEventListener("scroll", handlescroll)
    },[hasNextPage])

    if(status === "loading") return <div>Loading</div>
    if(status === "error") return <div>Error</div>
    return (
        <div>
            <h1>Infinite Scroll with react query</h1>

            {
                data?.pages?.map((page, index) => (
                    <ul key={index}>
                        {page.map((user) => (
                            <li key={user.id} style={{ padding: "10px", border: "1px solid #ccc" }}>
                                <p>{user.login}</p>
                                <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                            </li>
                ))}
                    </ul>
                ))
            }
            {isFetchingNextPage && <div>Loading More...</div>}
        </div>

    )
}