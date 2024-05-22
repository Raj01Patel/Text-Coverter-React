import React, { useReducer, useRef } from 'react';
import './TextConverter.css'


let initialState = {
    text: '',
    wordCount: 0,
    charCount: 0,
    time: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_TEXT': {
            const updatedNumberOfWords = action.payload.split(" ").filter((word) => word.trim().length > 0).length;
            return {
                ...state,
                text: action.payload,
                wordCount: updatedNumberOfWords,
                charCount: action.payload.length,
                time: 0.008 * updatedNumberOfWords,
            }
        }

        case 'REMOVE_EXTRA_SPACES': {
            let newText = state.text.trim().replace(/\s\s+/g, ' ');
            return {
                ...state,
                text: newText,
                charCount: newText.length
            }
        }

        case 'CONVERT_TO_LOWER':
            return { ...state, text: state.text.toLowerCase() };

        case 'CONVERT_TO_UPPER':
            return { ...state, text: state.text.toUpperCase() };

        case 'TITLE_CASE': {
            const words = state.text.split(' ');
            const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            const titleCaseText = titleCasedWords.join(' ');
            return { ...state, text: titleCaseText };
        }

        case 'ALTERNATING_CASE': {
            let newText = '';
            let isUpperCase = true;
            for (let char of state.text) {
                newText += isUpperCase ? char.toLowerCase() : char.toUpperCase();
                isUpperCase = !isUpperCase;
            }
            return {
                ...state,
                text: newText,
            }
        }

        case 'CLEAR_TEXT':
            return initialState;

        default:
            return state;
    }
}

function TextConverter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { text, wordCount, charCount, time } = state;
    const ref = useRef();

    const handleInputChange = (event) => {
        dispatch({ type: 'SET_TEXT', payload: event.target.value });
    };

    const handleRemoveExtraSpaces = () => {
        dispatch({ type: 'REMOVE_EXTRA_SPACES' });
    };

    const handleConvertToLowercase = () => {
        dispatch({ type: 'CONVERT_TO_LOWER' });
    };

    const handleConvertToUppercase = () => {
        dispatch({ type: 'CONVERT_TO_UPPER' });
    };

    const handleClearText = () => {
        dispatch({ type: 'CLEAR_TEXT' });
    };

    const handleTitlecase = () => {
        dispatch({ type: 'TITLE_CASE' })
    }

    const handleAlternatingCase = () => {
        dispatch({ type: 'ALTERNATING_CASE' })
    }

    const copyToClipboard = () => {
        ref.current?.select();
        window.navigator.clipboard.writeText(text);
    }


    return (
        <div className='main-container'>
            <h1>Enter your text here:</h1>
            <textarea ref={ref} value={text} onChange={handleInputChange} placeholder="Enter your text here..." rows={18} cols={140}></textarea>

            <div className='btn'>
                <button onClick={handleConvertToLowercase}>lower case</button>
                <button onClick={handleConvertToUppercase}>UPPER CASE</button>
                <button onClick={handleTitlecase}>Title Case</button>
                <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button onClick={copyToClipboard}>Copy</button>
                <button onClick={handleAlternatingCase}>aLtErNaTiNg cAsE</button>
                <button onClick={handleClearText}>Clear Text</button>

            </div>

            <div className='summery'>
                <h2>Summery Of Your Text</h2>
                <p>Number of words: {wordCount}</p>
                <p>Number of characters: {charCount}</p>
                <p>Reading Time: {time}</p>
            </div>

            <div>
                <h2>Preview Document</h2>
                <textarea value={text} rows={6} cols={140} placeholder='Preview of your input text' readOnly disabled></textarea>
            </div>
        </div>
    )
}

export default TextConverter