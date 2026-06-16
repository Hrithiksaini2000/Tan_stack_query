import axios from "axios";
import { useEffect, useState } from "react";
import { deletepost, fetchPosts } from "../API/api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";



export const Fetchrq = () => {



  const [pagenumber, setpagenumber] = useState(0)

  //   It is a main hook in react query 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pagenumber], // Usestate hook work in react query 
    queryFn: () => fetchPosts(pagenumber), // Useeffect hook work in react query 
    placeholderData: keepPreviousData,
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  })
  const queryclient = useQueryClient()

  // Mutation function to delete post 
const deletemutation = useMutation({
  mutationFn: (id)=> deletepost(id),
  onSuccess: (data,id)=>{
    queryclient.setQueryData(["posts", pagenumber], (curElem) =>{
      return curElem?.filter((post)=> post.id !== id)
    })
  }
})

  if (isLoading) return <p>Loading</p>
  if (isError) return <p> Error: {error.message || "Something Went Wrong"}</p>

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={()=> deletemutation.mutate(id)}>Delete</button>
            </li>
          );
        })}
      </ul>

      <div className="pagination-section container">
        <button disabled={pagenumber === 0 ? true : false} onClick={()=> setpagenumber((prev)=> prev - 3)}>Prev</button>
        <p>{pagenumber / 3 + 1}</p>
        <button onClick={()=> setpagenumber((prev)=> prev + 3)}>Next</button>
      </div>
    </div>
  );
};