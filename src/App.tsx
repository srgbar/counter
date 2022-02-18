import React, {ChangeEvent, useState} from 'react';
import './App.css';
import RootComponent from "./components/Settings/RootComponent";

const App = () => {

    const [countValue, setCountValue] = useState<number>(0)
    const [startInputValue, setStartInputValue] = useState<number>(0)
    const [maxInputValue, setMaxInputValue] = useState<number>(0)

    const incData = () => {
        if (startInputValue < maxInputValue) {
            setCountValue(countValue + 1);
        }
    }

    const resData = () => {
        setCountValue(0);
    }

    const onClickSettings = () => {
        setStartInputValue(startInputValue)
        setMaxInputValue(maxInputValue)
    }

    return <div className="app">
        <RootComponent countValue={countValue}
                       startInputValue={startInputValue}
                       maxInputValue={maxInputValue}

                       onChangeHandlerStart={setStartInputValue}
                       onChangeHandlerMax={setMaxInputValue}

                       incData={incData}
                       resData={resData}

                       onClickSettings={onClickSettings}
        />
    </div>
}

export default App;
