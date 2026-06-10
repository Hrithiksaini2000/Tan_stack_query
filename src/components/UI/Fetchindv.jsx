import { useQuery } from "@tanstack/react-query"
import { NavLink, useParams } from "react-router-dom"
import { fetchinvpost } from "../../API/api"

export const Fetchindv = () => {

    const { id } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id], // This will be called query keys 
        queryFn: () => fetchinvpost(id), // when arguments are needed we need to padd arrow function here 
    });

    if (isLoading) return <p>Loading</p>
    if (isError) return <p>Error: {error.message || "Something went wrong"}</p>


    return (
        <div>
            <div className="section-accordion">
                <h1>Post ID Number {id}</h1>
                <div>
                    <p>Id: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                </div>
                <NavLink to={`/rq`}>
                    <button>
                        Go Back
                    </button>
                </NavLink>
            </div>
        </div>
    )
}