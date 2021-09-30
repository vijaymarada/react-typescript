import React, { useState } from 'react';
import Image from './TsFnImage';
import '../App.css';
import Counter from '../Counter';
function TsFnApp() {
    const [countData, setCountData] = useState<Counter>({ count: 0 })

    const increment = () => setCountData({ count: countData.count + 1 })
    return (

        <div className="App">
            <header className="App-header">
                <Image title="Type script Function Component" />
                <br />
                Counter {countData.count}
                <br />
                <button onClick={increment}>Increment</button>
                
            </header>
        </div>
    );
}
export default TsFnApp