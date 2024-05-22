
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import { Outlet } from "react-router-dom"


function App(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default App

































// import React, { useReducer, useEffect } from 'react';

// const initialState = {
//   text: '',
//   wordCount: 0,
//   charCount: 0,
//   isDarkMode: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_TEXT':
//       return {
//         ...state,
//         text: action.payload,
//         wordCount: action.payload.trim().split(/\s+/).length,
//         charCount: action.payload.length,
//       };
//     case 'REMOVE_EXTRA_SPACES':
//       const newText = state.text.trim().replace(/\s\s+/g, ' ');
//       return {
//         ...state,
//         text: newText,
//         wordCount: newText.split(/\s+/).length,
//       };
//     case 'CONVERT_TO_LOWER':
//       return { ...state, text: state.text.toLowerCase() };
//     case 'CONVERT_TO_UPPER':
//       return { ...state, text: state.text.toUpperCase() };
//     case 'CLEAR_TEXT':
//       return { ...initialState };
//     case 'TOGGLE_THEME':
//       return { ...state, isDarkMode: !state.isDarkMode };
//     default:
//       return state;
//   }
// }

// function TextConverter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { text, wordCount, charCount, isDarkMode } = state;

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('text-converter-theme');
//     dispatch({ type: 'TOGGLE_THEME', payload: storedTheme === 'dark' });
//   }, []);

//   const handleInputChange = (event) => {
//     dispatch({ type: 'SET_TEXT', payload: event.target.value });
//   };

//   const handleRemoveExtraSpaces = () => {
//     dispatch({ type: 'REMOVE_EXTRA_SPACES' });
//   };

//   const handleConvertToLowercase = () => {
//     dispatch({ type: 'CONVERT_TO_LOWER' });
//   };

//   const handleConvertToUppercase = () => {
//     dispatch({ type: 'CONVERT_TO_UPPER' });
//   };

//   const handleClearText = () => {
//     dispatch({ type: 'CLEAR_TEXT' });
//   };

//   const toggleTheme = () => {
//     dispatch({ type: 'TOGGLE_THEME' });
//     localStorage.setItem(
//       'text-converter-theme',
//       isDarkMode ? 'light' : 'dark'
//     );
//   };

//   return (
//     <div className={`container ${isDarkMode ? 'dark' : ''}`}>
//       <h1>Text Converter</h1>
//       <textarea
//         value={text}
//         onChange={handleInputChange}
//         placeholder="Enter your text here..."
//         className={isDarkMode ? 'dark-textarea' : ''}
//       />
//       <div className={`info ${isDarkMode ? 'dark-info' : ''}`}>
//         <p>Words: {wordCount}</p>
//         <p>Characters: {charCount}</p>
//       </div>
//       <div className={`buttons ${isDarkMode ? 'dark-buttons' : ''}`}>
//         <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
//         <button onClick={handleConvertToLowercase}>Convert to Lowercase</button>
//         <button onClick={handleConvertToUppercase}>Convert to Uppercase</button>
//         <button onClick={handleClearText}>Clear Text</button>
//         <button onClick={toggleTheme}>
//           {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TextConverter;
