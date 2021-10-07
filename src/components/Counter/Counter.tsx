import React from "react";
import s from "./Counter.module.css";

export type PropsType = {
    data: number
    incData: () => void
    resData: () => void
}

const Counter = (props: PropsType) => {
    return <div className={s.back}>
        <div className={props.data !== 10 ? s.display : s.maxValue}>{props.data}</div>
        <div className={s.fon}>
            <button disabled={props.data === 10} onClick={props.incData} className={s.inc}>INCREASE</button>
            <button disabled={props.data === 0} onClick={props.resData} className={s.reset}>RESET</button>
        </div>
    </div>
}

export default Counter
