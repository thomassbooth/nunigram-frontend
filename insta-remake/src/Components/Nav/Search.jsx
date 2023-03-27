import React, { useState, useRef, useEffect} from 'react'
import { motion} from "framer-motion";

function Search({smallNav}) {
    const [search, setSearch] = useState('')
    const searchRef = useRef()
    
    useEffect(() => {
        console.log('inside useEffect')
        if (!smallNav.search){
            searchRef.current.focus()
        }
    
    }, [smallNav])
    
    // TODO ONLY MAKE THIS RENDER ON THE FIRST OPEN -> no point in having all of this html sat in the background
    
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const deleteSearch = () => {
        console.log('this is search' + search)
        setSearch('')
    }

    
    return (
    <div className = 'fixed flex h-screen dark:bg-black bg-white'>
        <div className = 'w-[70px]'>
        </div>
        <motion.div className = 'border-r dark:border-gray-500' 
        variants = {{
            open: { opacity: 0, font: 0, width: 0},
            closed: { opacity: 1, width: `400px`}
          }}
          transition={{ duration: 0.4}}>
            <h1 className = 'font-medium text-2xl ml-6 mt-5'>Search</h1>
            <div className = 'mx-5 mt-10 pb-10 border-b'>     
                <input ref = {searchRef} id = 'search-input' value = {search} onChange = {updateSearch} placeholder = 'Search' className = 'peer outline-none bg-gray-100 dark:bg-neutral-800 py-2 px-5 rounded-lg w-full'></input>
                <button onClick = {deleteSearch} className = 'p-3 peer-placeholder-shown:invisible peer-focus:visible visible text-sm absolute translate-x-[325px] -translate-y-[39px] flex items-center justify-center'><i className = 'fa fa-times'></i></button>  
            </div>
            
        </motion.div>
    </div>
  )
}

export default Search