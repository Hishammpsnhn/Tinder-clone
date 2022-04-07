import React, { useState } from 'react'
import people from './data'

const Article = () => {
  const [data, setData] = useState(0);
  const [showinfo,setShowinfo] = useState(false)

  const { id, image, name, job, text } = people[data]

  const checkNo = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1
    }
    return number

  }

  const nextperson = () => {
    setData((index) => {
      const newIndex = index + 1
      return checkNo(newIndex)
    })
  }
  const preperson = () => {
    setData((index) => {
      const newIndex = index - 1
      return checkNo(newIndex)
    })
  }

  const randomperson = () => {
    let randomnumber = Math.floor(Math.random() * people.length)
    if (randomnumber === data) {
      randomnumber = data + 1
    }
    setData(checkNo(randomnumber))
  }
  return (
    <div key={id} className="article-container">
      <img className='image' src={image} alt={name} />
      <span className='name'>{name}</span>
      <span className='job'>{job}</span>
      { showinfo &&  <span className='text'>{text}</span> }
      <button onClick={()=> setShowinfo(!showinfo) }>{showinfo ? "hide" : "show"}</button>       
      <div>
        <button className='main-btn' onClick={preperson}>pre</button>
        <button className='main-btn' onClick={nextperson}>next</button>
      </div>
      <button className='sur-btn' onClick={randomperson}>surprice</button>

    </div>
  )
}

export default Article