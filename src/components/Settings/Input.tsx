import React, {ChangeEvent} from "react";
import s from "./Root.module.css";

export type InputPropsType = {
    title: string
    countValue: number
    onChangeCallback: (countValue: number) => void
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCallback(+e.currentTarget.value)
    }

    console.log(props.countValue)

    return (
        <div>
            <span>{props.title}</span>
            <input className={s.startValue}
                   type="number"
                   onChange={onChangeHandler}
                   value={props.countValue}

            />
        </div>
    )
}

export default Input