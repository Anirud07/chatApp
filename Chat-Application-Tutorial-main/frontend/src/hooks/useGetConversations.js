import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true)

        const res = await fetch("/api/users")
        
        if (!res.ok) {
          throw new Error("Failed to fetch conversations")
        }

        const data = await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setConversations(data)
      } catch (error) {
        toast.error(error.message)
        setConversations([]) // Ensure conversations is an array even on error
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversations