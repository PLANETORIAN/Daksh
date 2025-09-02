import React, { useEffect, useState } from 'react'

function Searchbox() {
    const [person, setperson] = useState([])
    const [search, setsearch] = useState('')

    const API_URL = `https://dummyjson.com/users/search?q=${search}`
    useEffect(() => {
        fetch(API_URL)
                    .then(res => res.json())
                    .then(data => setperson(data["users"]))
                    .catch(err => console.log(err))

    }, [])

    // const filteredName = person.filter((i) => i.firstname.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='w-full  h-40 border-2 rounded-4xl'>Searchboxx
        <div className='text-left mt-6 ml-4'> 
            <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder=' your value' className='border-2'/>
            <button className = "bg-gray-100 p-2 ml-2" onClick={() => {
            }}>Search</button>
        </div>
        <div className='text-amber-300'>
            {person.map((i) => {
                return <div key={i.id}>{i.firstname}</div>

            })}
        </div>
        
    </div>
  )
}

export default Searchbox