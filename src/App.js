import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/ui/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters${query}`)
        .then(result => result.json())
        .then((data) => {
            setItems(data)
            setIsLoading(false)
        })       
    }, [query])

    return (
        <div className="container">
            <Header/>
            <Search getQuery={(q) => { setQuery(`?name=${q}`)}}/>
            <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
    )
}

export default App
