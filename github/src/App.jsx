import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState(false);
  const [data,setData] = useState([]);
  const [query,setQuery] = useState("masai");
  const [page,setPage] = useState(1)

  const getGithubUsers=(q="albseb511",page=1)=>{
  return axios(" https://api.github.com/search/users",{
   method:"GET",
  params:{
      q,
      per_page:5,
      page
    }
  })
}

useEffect(()=>{
  getGithubUsers(query, page)
  .then(res=>{
    setLoading(false)
    setData(res.data)
  }).catch(err=>{
    setError(false)
    console.log(err)
  })
},[query,page])

const GithubCard=({avatar_url,login})=>{
  return(
    <div style={{display:"flex"}} >
      <img style={{width:"100px",height:"100px"}} src={avatar_url} ></img>
      <div >{login}</div>
    </div>
  )
}

const SearchBox = ({handleClick})=>{
  const [text,setText] = useState("")
  return(
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  ></input>
      <button onClick={()=>handleClick(text)} >Search</button>
    </div>
  )
}

const handleClick = (query)=> setQuery(query)
console.log(data)
console.log(query)
  return (
    <div className="App">
      <h2>Github user</h2>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <SearchBox handleClick={handleClick} />
      {data?.items?.map((item)=>(
        <GithubCard key={item.id} {...item} />
      ))}
      <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>
        <button onClick={()=>setPage(page+1)} >Next</button>
      </div>
    </div>
  )
}

export default App
