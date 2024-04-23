import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from "../../Domain/redux/features/counterSlice"
import Button from '../../Components/Button/index.jsx'

const CounterView =()=>{
    const count = useSelector((state) => state.counter.value)
    const dispatch =useDispatch()
    return(
        <div className="w-full">
          <div className="mx-auto max-w-[800px]">
            <p className="text-[7vw] font-light">REACT JS REDUX</p>
            <div className="bg-slate-50 rounded-md p-4 flex">

            <div className="px-2 flex justify-center items-center">
              <p className="text-[12vw] font-bold">{count}</p>
            </div>

            <div className="flex-col gap-4">
              <Button text='Increment' handleClick={() => dispatch(increment())}/>

              <Button text='Decrement' handleClick={() => dispatch(decrement())}/>
            
            </div>
          </div>
          </div>
        </div>
    )
}
export default CounterView