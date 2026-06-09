import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

export const Fetchrq = () => {

//   It is a main hook in react query 
const {data, isLoading, isError, error} = useQuery({
    queryKey:["posts"], // Usestate hook work in react query 
    queryFn: fetchPosts, // Useeffect hook work in react query 
    // staleTime: 5000,
    refetchInterval: 1000,
    refetchIntervalInBackground:true,
  })

  if(isLoading) return <p>Loading</p>
  if(isError) return <p> Error: {error.message ||  "Something Went Wrong"}</p>

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};