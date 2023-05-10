import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    console.log(state)
    return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter));
  })

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content} has {anecdote.votes}
            <button onClick={() => {
  dispatch(increaseVote(anecdote.id));
  dispatch(setNotification(`you voted'${anecdote.content}'` ));
  setTimeout(() => dispatch(removeNotification()), 5000);
}}>vote</button>

          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
