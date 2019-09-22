import React from 'react'
import Result from './Result'

function ResultGrid() {
    const results = [
        {id: 1, firstName: 'Sheekha', lastName: 'Jariwala', skills: 'Python, Javascript'},
        {id: 2, firstName: 'Vijay', lastName: 'Tadimeti', skills: 'Python, Ruby'}, 
        {id: 3, firstName: 'Sonam', lastName: 'Gyanchandani', skills: 'Python, HTML'}]
    
    const resultList = results.map(res => <Result key={res.id} result={res}></Result>)

    return (
        <div>
            {resultList}
        </div>
    )
}

export default ResultGrid
