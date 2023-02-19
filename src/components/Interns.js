import React from 'react'
import { useState } from 'react'
import { Backend } from './InternData'
import { Frontend} from './InternData'
import './interns.css'

const Interns = (prop) => {
    const [allInterns, setAllInterns] = useState (Frontend)


    const showBackEnd = () =>{
      allInterns !== Backend ? setAllInterns([...Backend].sort((a,b)=>b.totalscore - a.totalscore)) : setAllInterns('')

    }


    const showFrontEnd = () =>{
      allInterns !== Frontend ? setAllInterns([...Frontend].sort((a,b)=>b.totalscore - a.totalscore)) : setAllInterns([...Frontend].sort((a,b)=>b.totalscore - a.totalscore))
    }

  return (
    <>
      <div className='btn'>
    <button type='submit' onClick={showBackEnd} >BackEnd</button>
    <button type='submit' onClick={showFrontEnd}>FrontEnd</button>
    </div>
    <p className='info'>click Each Path to show Interns based on their Score Ranking</p>

    <ul>  
      {allInterns.map((intern)=>{
        const {img, name,id,path,tasks,totalscore} = intern
        
        return (

          <li key={id} className="container">
            <div className='intro'>
            <div className='img'>
              <img src={img} alt=""/>
            </div>
          <h2>
            {name}
          </h2>
          </div>
          <p className='path'>{path}</p>
          <div className='tasks'>
          <p>Task1= {tasks.task1}</p>
          <p>Task2= {tasks.task1}</p>
          <p>Task3= {tasks.task1}</p>
          <p>Task4= {tasks.task1}</p>
          <p>Task5= {tasks.task1}</p>
          </div>
          <p className='total'>
            Total Score: {totalscore}
          </p>
            </li>



          
        )
      })}
    </ul>
    </>
  )
}

export default Interns