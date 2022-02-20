import React, {ChangeEvent} from "react";
import s from "./Root.module.css";

export type InputPropsType = {
    title: string
    countValue: number
    onChangeCallback: (countValue: number) => void
    condition: string
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCallback(+e.currentTarget.value)
    }

    console.log(props.countValue)

    return (
        <div>
            <span>{props.title}</span>
            <input className={!props.condition ? s.input : s.errorInput}
                   type="number"
                   onChange={onChangeHandler}
                   value={props.countValue}

            />
        </div>
    )
}

export default Input