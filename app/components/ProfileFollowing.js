import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import LoadingDotsIcon from "./LoadingDotsIcon"
import StateContext from "../StateContext"

function ProfileFollowing(props) {
  const { username } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const appState = useContext(StateContext)

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/following`, { cancelToken: ourRequest.token })
        setPosts(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem.")
      }
    }
    fetchPosts()
    return () => {
      ourRequest.cancel()
    }
  }, [username])

  if (isLoading) return <LoadingDotsIcon />

  return (
    <div className="list-group">
      {posts.map((following, index) => {
        return (
          <Link key={index} to={`/profile/${following.username}`} className="list-group-item list-group-item-action">
            <img className="avatar-tiny" src={following.avatar} /> <strong>{following.username}</strong>
          </Link>
        )
      })}
      {posts.length == 0 && appState.user.username == username && <p className="list-group-item list-group-item-action">You aren't following anybody yet.</p>}
      {posts.length == 0 && appState.user.username != username && <p className="list-group-item list-group-item-action">This user isn't following anybody yet.</p>}
    </div>
  )
}

export default ProfileFollowing
