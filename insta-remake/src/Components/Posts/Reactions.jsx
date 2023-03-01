import React from 'react'

const Reactions = ({bookmark, onMark, liked, onLike, likes, name, caption}) => {
    let likedClass = "fa fa-heart-o mr-5"
    let markedClass = "fa fa-bookmark-o"
    if (liked == true) {
        likedClass = "fa fa-heart-o mr-5 bg-red-300"
    }
    
    if (bookmark == true) {
        markedClass = "fa fa-bookmark-o bg-red-300"
    }

  return (
    <div>
        <div className = "my-2 text-2xl flex justify-between">
            <div>
                <button className = "hover:opacity-40" onClick={onLike}><i className = {likedClass}></i></button>
                <button className = "hover:opacity-40"><i className = "fa fa-comment-o mr-5"></i></button>
                <button className = "hover:opacity-40"><i className = "fa fa-paper-plane-o"></i></button>
            </div>
            <button className = "hover:opacity-50" onClick = {onMark}><i className = {markedClass}></i></button>
        </div>
        <button className = "mb-1 text-sm font-semibold">
            {likes} likes
        </button>
        <div className = "text-sm"> 
            <a href = "" className = "font-semibold">{name}</a> {caption}
        </div>
    </div>
    
  )
}

export default Reactions