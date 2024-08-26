import React from "react"
import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations"

const Coversations = () => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Array.isArray(conversations) && conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversation.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Coversations