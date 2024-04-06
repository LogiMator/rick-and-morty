import { useEffect, useState } from "react"
import { Character } from "./Character"


function NextPage({page, setPage}){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <button className="btn btn-primary btn-sm"
        onClick={() => setPage(page - 1)} >
      
        Back {page - 1}
      </button>

      <button className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)} >
      
        Page {page + 1}
      </button>
    </header>
  )
}

function GetCharacters () {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

useEffect(() => {
    async function fectData  () {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const {results} = await data.json()
        setCharacters(results)
        setLoading(false)
    }

    fectData()
}, [page])

    return (
      <div className="container">
        <NextPage page={page} setPage={setPage}/>
        {
          loading ?(
            <div> loading... </div>
          ) : (
            <div className="row">
            {characters.map(character => {
          return (
            <div className="col-md-4" key={character.id}>
            <Character 
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            />
            </div>
            )
          })}
        </div>
          )
        }
        <NextPage page={page} setPage={setPage}/>
      </div>


    )

}
export default GetCharacters
