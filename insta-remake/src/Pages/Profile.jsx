import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageTypes from '../Components/Profile/ImageTypes'
import Post from '../Components/Profile/Post'
import About from '../Containers/About'
import Modal from '../Containers/Modal'

function Profile() {
    const {handle} = useParams();
    const [activeTab, setActive] = useState('POSTS')
    const [profileData, setProfile] = useState({
      nickname: 'thomassboothh',
      name: 'Tom Booth',
      pronouns: 'he/him',
      about: 'test datatest data123',
      occupation: 'Software Engineer',
      mutualFollowers: ['Dave', 'bigtimmy', 'stevenHawk', 'stinkyPeter'],
      posts: 15,
      followers: 388,
      following: 384,
      followed: false,
      story: {
        exists: true,
        watched: false
      },});

    const postTypes = {
      1: {
        name: 'POSTS',
        icon: 'fa-th',
      },
      2: {
        name: 'SAVED',
        icon: 'fa-bookmark-o',
      },
      3: {
        name: 'TAGGED',
        icon: 'fa-address-book-o',
      }}
      
    const updateTab = (tabName) => {setActive(tabName)}
    
    function renderPosts() {
      switch(activeTab){
        case 'POSTS':
          let posts = [{likes: 50, comments: 10}, {likes: 40, comments: 12}, {likes: 22, comments: 15}, {likes: 5, comments: 1}]
          return (
            <div className = 'flex flex-wrap justify-between'>
              {posts.map((post) => {
                  return <Post likes = {post.likes} comments = {post.comments} src = {'images/cat.jpg'}/>})}
            </div>
          )
        case 'SAVED':
          return 'SAVED'
        case 'TAGGED':
          let tags= [{likes: 50, comments: 10}, {likes: 40, comments: 12}, {likes: 22, comments: 15}, {likes: 5, comments: 1}]
          return (
            <div className = 'flex flex-wrap justify-between'>
              {tags.map((tag) => {
                  return <Post likes = {tag.likes} comments = {tag.comments} src = {'images/storm.jpeg'}/>})}
            </div>
          )
        default:
          break;
      }
    }

    const watchedStory = () => {setProfile({...profileData, story:{exists: true, watched: true}})}
    const followedUser = () => {setProfile({...profileData,followed: !profileData.followed})}


  return (
    <div className = 'w-4/5 flex justify-center'>
      <div className = 'w-[1000px]'>
        <About handle = {handle} data = {profileData} watchedStory = {watchedStory} followedUser = {followedUser}/>
        <div className = 'border-t mt-10'>
          <div className = 'flex justify-center space-x-20'>
            {Object.keys(postTypes).map((tab) => {
              return <ImageTypes key = {tab} tab = {postTypes[tab]} activeTab = {activeTab} updateTab = {updateTab}/>
            })}
          </div>
          {renderPosts()}
        </div>
      </div>
        
    </div>
  )
}

export default Profile