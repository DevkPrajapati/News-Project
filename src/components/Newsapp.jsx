import React, { useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search , setSearch] = useState("");

    const API_KEY = "96587adc1717436d99f650c59979aa6b";


    const getData = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await res.json();
        console.log(jsonData.articles);
        
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);       
    }

  return (
    <div>
        <nav>
            <div>
                <h1>News App</h1>
            </div>
            <ul className='links'>
                <a>All News</a>
                <a>Treding</a>
            </ul>
            <div className='searchbar'>
                <input type="text" placeholder='Serach News' onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div className="head">
            <p>Stay Update The Trending App</p>
        </div>
        <div className='categoryBtn'>
            <button>Sports</button>
            <button>Politics</button>
            <button>Entertaintment</button>
            <button>Helth</button>
            <button>Fitness</button>

        </div>
        <div>
            <Card />
        </div>
    </div>
  )
}

export default Newsapp
