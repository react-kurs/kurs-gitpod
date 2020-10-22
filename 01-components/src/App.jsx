import React, { useState } from 'react'

// kondisjonell rendering

const App = () => {

    const [state, setState] = useState(() => "iniitell verdi");

    const handleOnClick = (e) => {
    }

    return false && <div>True</div>;

}

export default App
