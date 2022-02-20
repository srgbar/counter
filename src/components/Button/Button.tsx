import React from "react";
import s from "./Button.module.css";

export type ButtonPropsType = {
    titleButton: string
    disable?: boolean
    onClickHandler: () => void
}

const Button = (props: ButtonPropsType) => {
    return <>
            <button className={s.button}
                    disabled={props.disable}
                    onClick={() => props.onClickHandler()}
            >{props.titleButton}</button>
        </>
}

export default Button
