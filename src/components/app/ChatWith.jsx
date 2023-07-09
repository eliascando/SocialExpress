/* eslint-disable react/prop-types */
export const ChatWith = ({setChatWith, person}) => {
  return (
    <div className="chat-with">
        <h3>ChatWith: {person.name}</h3>
        <button onClick={()=>{setChatWith(false)}}>Back</button>
    </div>
  )
}