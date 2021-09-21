import React, { useState } from 'react'

export const Calculator = () => {

    const [result, setResult] = useState('')
    const [calc, setCalc] = useState('')

    const nums = [{ 'zero': 0 }, { 'one': 1 }, { 'two': 2 }, { 'three': 3 }, { 'four': 4 }, { 'five': 5 }, { 'six': 6 }, { 'seven': 7 }, { 'eight': 8 }, { 'nine': 9 }]
    const oper = [{ "add": "+" }, { "substract": "-" }, { "multiply": "*" }, { "divide": "/" }, { "decimal": "." }]
    const ops = ['/','*','+','-','.']

    const handleClick = (e) => {

        if(
            ops.includes(e.target.value) && calc === ''|| 
            ops.includes(e.target.value) && ops.includes(calc.slice(-1))
        ){
            return;
        }

        setCalc(calc + e.target.value.toString())

        if(!ops.includes(e.target.value)){
            setResult(eval(calc+e.target.value).toString())
        }



        
    }

    const handleReset = (e) => {
        setResult('')
        setCalc('')
    }

    const handleEqual = () =>{
        setCalc(eval(calc).toString())
    }
   


    return (
        <div className="container">
            
        <div className="result">
            <span>({result||0})</span>{calc||0}
        </div>

            <div className="wrapper">
                {
                    nums.map((data, index) => (
                        <input
                            key={index}
                            type="button"
                            value={Object.values(data)}
                            id={Object.keys(data)}
                            className="nums"
                            onClick={handleClick}
                        />
                    ))
                }
                {
                    oper.map((data, index) => (
                        <input
                            key={index}
                            type="button"
                            value={Object.values(data)}
                            id={Object.keys(data)}
                            className="operators"
                            onClick={handleClick}
                        />
                    ))
                }
                <input type="button" value="=" id="equal" onClick={handleEqual} />
                <input type="button" value="AC" id="clear" onClick={handleReset} />
            </div>

        </div>
    )
}
