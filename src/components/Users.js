import React from 'react'
import { useState } from 'react';
import useFetch from 'react-custom-fetch-hook';
import Navigation from './Navigation';



const Users = () => {
  //setting a state for pagination
  const [page, setPage] = useState(1)

  //Using useFtch custom hook to make an API call
  const { loading, error, data } = useFetch(
      `https://randomuser.me/api/?results=1000&seed=abc`
    );

  const perPage = 20

  const total = data?.results?.length

  const noOfPages = Math.ceil(total / perPage)

  const skip = (page * perPage) - perPage

  //Setting  a condition when the API is loading
  if(loading){
    return (
      <h2 className='loading'>Fetching data, please wait...</h2>
    )
  }

  //conditional rendering to catch the error
  if(!loading && error){
    return(
      <h2>Error</h2>
    )
  }


  return (
    <div>
        <Navigation />
        <div className='users-section'>
          <h1>5 Ways We Conserve Quickly and Durably</h1>
          <p> We have to work quickly to conserve nature and ensure that the work we do endures. Helping to launch a sustainable tuna company. Raising coral embryos to serve as marine habitats. Partnering with local communities to conserve
             important habitats. In these ways and more, we're providing the next generation with the tools they need to build a sustainable future.</p>
          <h2>List of AfriNaters</h2>
          {data?.results.slice(skip, skip + perPage).map((item, index) => {
            const name = `${item.name.title} ${item.name.first} ${item.name.last}`
            return( 
              <li key={name.toLowerCase().replaceAll(' ', '')} style={{listStyle: "none", paddingLeft: "1rem"}}>
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
            > Prev
            </button>
          }
          
          {/* Array.from  returns an arraylike, mapfunction(value and index) and this*/}
          {/* the value of this array would be undefined, replacing it with underscore(_) */}
          {
            Array.from({length: noOfPages},( _, index) => index + 1).map(item =>(
              <button onClick={()=> setPage(item)} className='usersBtn' >{item}</button>
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

    </div>
  )
}

export default Users