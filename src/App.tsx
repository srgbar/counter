import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';


const App = () => {
    const [data, setData] = useState<number>(0)

    const incData = () => {
        if (data < 10) {
            setData(data + 1);
        }
    }
    const resData = () => {
        setData(0);
    }

    return <div className="app">
        <Counter data={data}
                 incData={incData}
                 resData={resData}
        />
    </div>
}

export default App;
