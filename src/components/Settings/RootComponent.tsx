import React from "react";
import s from "./Root.module.css"
import BlockDisplay from "../Counter/BlockDisplay";
import {BlockSettings} from "./BlockSettings";

export type RootPropsType = {
    countValue: number
    startInputValue: number
    maxInputValue: number
    onChangeHandlerStart: (countValue: number) => void
    onChangeHandlerMax: (countValue: number) => void
    incData: () => void
    resData: () => void
    onClickSettings: () => void
}

const RootComponent = (props: RootPropsType) => {

    return (
        <div className={s.containerRoot}>
            <div>
                <BlockSettings
                    onChangeHandlerStart={props.onChangeHandlerStart}
                    onChangeHandlerMax={props.onChangeHandlerMax}

                    startInputValue={props.startInputValue}
                    maxInputValue={props.maxInputValue}

                    onClickSettings={props.onClickSettings}
                />
            </div>
            <div>
                <BlockDisplay
                    countValue={props.countValue}
                    incData={props.incData}
                    resData={props.resData}

                    startInputValue={props.startInputValue}
                    maxInputValue={props.maxInputValue}

                />
            </div>
        </div>
    )
}

export default RootComponent