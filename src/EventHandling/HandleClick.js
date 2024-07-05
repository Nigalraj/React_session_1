import { useState } from "react";

const HandleClick = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
    };

    const handleMouseEnter = () => {
        console.log('Mouse entered!');
    };

    const handleMouseLeave = () => {
        console.log('Mouse left!');
    };

    const handleFocus = () => {
        console.log('Input focused!');
      };
    
      const handleBlur = () => {
        console.log('Input blurred!');
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          alert('Enter key pressed!');
        }
      };


    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <br />
            <input type="text" value={inputValue} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Hover over me
            </div>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} />;
            <br/>
            <input type="text" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default HandleClick;