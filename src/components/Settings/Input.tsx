import React, {ChangeEvent} from "react";
import s from "../../App.module.css"

export type InputPropsType = {
    title: string
    countValue: number
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    condition: boolean
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCallback(e)
    }

    return (
        <div>
            <span>{props.title}</span>
            <input className={!props.condition ? s.input : `${s.input} ${s.errorInput}`}
                   type="number"
                   onChange={onChangeHandler}
                   value={props.countValue}
            />
        </div>
    )
}

export default Input