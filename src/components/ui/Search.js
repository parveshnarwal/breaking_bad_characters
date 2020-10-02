import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText]  = useState('')

    const onChange = (value) => {
        setText(value)
        getQuery(value)
    }

    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                placeholder="Search Charcters" 
                className="form-control"
                value={text}
                onChange={e => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
