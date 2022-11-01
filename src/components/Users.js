import React from 'react'
import { useState } from 'react';
import useFetch from 'react-custom-fetch-hook';
import Navigation from './Navigation';



const Users = () => {
  //setting a default page to be 1
  const [page, setPage] = useState(1)

  //making an API call using useFtch custom hook
  const { loading, error, data } = useFetch(
      `https://randomuser.me/api/?results=1000&seed=abc`
    );

  console.log({ error, loading, data})

  const perPage = 20
  const total = data?.results?.length
  const noOfPages = Math.ceil(total / perPage)
  // 1 * 20 -20 = 0
  // 2 * 20 -20 = 20
  //calculate skip
  const skip = (page * perPage) - perPage

  //Setting  a condition when the API is loading
  if(loading){
    return (
      <h2>Please wait...</h2>
    )
  }

  //when there is error
  if(!loading && error){
    return(
      <h2>Error</h2>
    )
  }


  return (
    <div>
        <h1>Users of Router</h1>
          <Navigation />
        <br/>
        <h2>List of Users</h2>
        {data?.results.slice(skip, skip + perPage).map((item, index) => {
          const name = `${item.name.title} ${item.name.first} ${item.name.last}`
          return( 
            <li key={name.toLowerCase().replaceAll(' ', '')} style={{listStyle: "none"}}>
              {`${index + 1}.
                ${name}`
              }
            </li>
          )
        })}
       
       <br />
       
        <p className='noOfPages'>Pages: {page} of {noOfPages}</p>

        <br />
        {
          <button className='prev-next'
           disabled={page <= 1}
           aria-disabled={page <= 1}
           onClick={()=> setPage(prev => prev -1)}
           >Prev
          </button>
        }
        
        {/* Array.from  returns an arraylike, mapfunction(value and index) and this*/}
        {/* the value of this array would be undefined, replacing it with underscore(_) */}
        {
          Array.from({length: noOfPages},( _, index) => index + 1).map(item =>(
            <button onClick={()=> setPage(item)} className='usersBtn'>{item}</button>
          ))
        }


        {
          <button className='prev-next'
           disabled={page >= noOfPages}
           aria-disabled={page >= noOfPages}
           onClick={()=> setPage(prev => prev + 1)}
          >Next
          </button>
        }

    </div>
  )
}

export default Users