import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('car');
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${`EMCdaPPYADCIvQXissVMOGIT6VeWMbXO`}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect( () => {
        fetchData();
    },[] )


    function clickHandler() {
        fetchData();
    }

    function ChangeHandler(event) {
        setTag(event.target.value);
    }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'> Random {tag } GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src= {gif} width="450"/>)
        }

        <input
            className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
            onChange={ChangeHandler}
            value={tag}
        />

        <button onClick={clickHandler}
        className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag