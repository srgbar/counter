import React from "react";
import st from "../Counter/BlockDisplay.module.css";
import s from "./Root.module.css";
import Input from "./Input";
import Button from "../Button/Button";

export type SettingsPropsType = {
    onClickSettings: () => void

    startInputValue: number
    maxInputValue: number

    onChangeHandlerStart: (countValue: number) => void
    onChangeHandlerMax: (countValue: number) => void
}

export function BlockSettings(props: SettingsPropsType) {

    const condition = props.startInputValue < 0 || props.startInputValue > props.maxInputValue || props.startInputValue === props.maxInputValue ? 'Incorrect Value' : ''


    return <div className={st.back}>
        <div className={s.display}>
            <div className={s.parentDiv}>
                <Input title={"start value: "}
                       countValue={props.startInputValue}
                       onChangeCallback={props.onChangeHandlerStart}
                       condition={condition}
                />
            </div>
            <div className={s.parentDiv}>
                <Input title={"max value: "}
                       countValue={props.maxInputValue}
                       onChangeCallback={props.onChangeHandlerMax}
                       condition={condition}
                />
            </div>
        </div>
        <div className={s.fon}>
            <Button
                titleButton={"SET"}
                onClickHandler={props.onClickSettings}
                disable={props.startInputValue === props.maxInputValue
                || props.startInputValue > props.maxInputValue
                || props.startInputValue < 0
                || props.maxInputValue < 0}
            />
        </div>
    </div>;
}