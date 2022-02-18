import React from "react";
import st from "../Counter/Counter.module.css";
import s from "./Root.module.css";
import Input from "./Input";
import Button from "../Button/Button";

export type SettingsPropsType = {
    onClickHandler: () => void

    startInputValue: number
    maxInputValue: number

    onChangeHandlerStart: (countValue: number) => void
    onChangeHandlerMax: (countValue: number) => void
}

export function BlockSettings(props: SettingsPropsType) {
    return <div className={st.back}>
        <div className={s.display}>
            <div className={s.parentDiv}>
                <Input title={"start value: "}
                       countValue={props.startInputValue}
                       onChangeCallback={props.onChangeHandlerStart}

                />
            </div>
            <div className={s.parentDiv}>
                <Input title={"max value: "}
                       countValue={props.maxInputValue}
                       onChangeCallback={props.onChangeHandlerMax}
                />
            </div>
        </div>
        <div className={s.fon}>
            <Button
                titleButton={"SET"}
                onClickHandler={props.onClickHandler}
            />
        </div>
    </div>;
}