import React, {ChangeEvent} from "react";
import s from "../../App.module.css"
import Input from "./Input";
import Button from "../Button/Button";

export type SettingsPropsType = {
    onClickSettings: () => void
    startInputValue: number
    maxInputValue: number
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    condition: boolean
}

export function SettingsDisplay(props: SettingsPropsType) {
    return <div className={s.containerDisplay}>
        <div className={s.displaySet}>
            <div className={s.containerInput}>
                <Input title={"start value: "}
                       countValue={props.startInputValue}
                       onChangeCallback={props.onChangeHandlerStart}
                       condition={props.condition}
                />
            </div>
            <div className={s.parentDiv}>
                <Input title={"max value: "}
                       countValue={props.maxInputValue}
                       onChangeCallback={props.onChangeHandlerMax}
                       condition={props.condition}
                />
            </div>
        </div>
        <div className={s.containerButton}>
            <Button
                titleButton={"SET"}
                onClickHandler={props.onClickSettings}
                disable={!!props.condition}
            />
        </div>
    </div>;
}