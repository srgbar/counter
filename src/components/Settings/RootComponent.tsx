import React from "react";
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
        <div>
            <BlockDisplay
                countValue={props.countValue}
                incData={props.incData}
                resData={props.resData}

                startInputValue={props.startInputValue}
                maxInputValue={props.maxInputValue}

            />
            <BlockSettings
                onChangeHandlerStart={props.onChangeHandlerStart}
                onChangeHandlerMax={props.onChangeHandlerMax}

                startInputValue={props.startInputValue}
                maxInputValue={props.maxInputValue}

                onClickHandler={props.onClickSettings}
            />
        </div>
    )
}

export default RootComponent