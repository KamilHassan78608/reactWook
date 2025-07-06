
import { useState } from 'react';
import './Notepad.css';

export default function Notepad(props) {

    const myStyle = {
        background: props.mode ? '#1C222D' : 'linear-gradient(135deg, #4f46e5, #3b82f6)',
        color: 'white'
    }

    const colorStyle = {
        background: props.mode ? '#ccc' : 'white',
        color: props.mode ? 'black' : '#3b82f6',
    };

    

    const [text, setText] = useState("");
    const [fontsize, setFontsize] = useState('18');
    const [fontfamily, setFontfamily] = useState('Arial');
    const [fontalign, setFontalign] = useState('Left');
    const [fontcolor, setFontcolor] = useState('black');
    const [bgcolor, setBgcolor] = useState('white');

    const handleText = (event) => {
        setText(event.target.value);
    }
    
    const douper = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    const dolower = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    const titleCase = () => {
        const newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    }

    const clear = () => {
        const newText = "";
        setText(newText);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
    }
    

    return(
        <>
        <div className="container" style={myStyle}>
            <div className="head">
            <label>Font Size</label>
            <select onChange={(e) => setFontsize(e.target.value)}>
                {
                    [12, 14, 16, 18, 24, 36].map(size => (
                        <option value={size}>{size}</option>
                    ))
                }
            </select>
            <label>Font Family</label>
            <select onChange={(e) => setFontfamily(e.target.value)}>
                {
                    ["Georgia", "Arial", "Consolas", "Pacifico", "Impact", "Lobster"].map(family => (
                        <option value={family}>{family}</option>
                    ))
                }
            </select>
            <label>Font align</label>
            <select onChange={(e) => setFontalign(e.target.value)}>
                {
                    ["Left", "Center", "Right", "Justify"].map(align => (
                        <option value={align}>{align}</option>
                    ))
                }
            </select>
            <label>Color</label>
            <select onChange={(e) => setFontcolor(e.target.value)}>
                {
                    ["Red", "White", "Black", "Blue", "Pink", "Navy"].map(color => (
                        <option value={color}>{color}</option>
                    ))
                }
            </select>
            <label>Background</label>
            <select onChange={(e) => setBgcolor(e.target.value)}>
            {
                    ["Red", "White", "Black", "Blue", "Pink", "Navy"].map(bgcolor => (
                        <option value={bgcolor}>{bgcolor}</option>
                    ))
                }
            </select>
            </div>
            <div>
            <textarea
                placeholder="Write Something......."
                value={text}
                onChange={handleText}
                style={{
                    fontSize: `${fontsize}px`,
                    fontFamily: `${fontfamily}`,
                    textAlign: `${fontalign}`,
                    color: `${fontcolor}`,
                    backgroundColor: `${bgcolor}`
                    
                }}
            ></textarea>
            </div>
            <div className='foot'>
                <button onClick={douper} style={colorStyle}>Upper Case</button>
                <button onClick={dolower} style={colorStyle}>Lower Case</button>
                <button onClick={titleCase} style={colorStyle}>Title case</button>
                <button onClick={copyText} style={colorStyle}>Copy Text</button>
                <button onClick={clear} style={colorStyle}>Clear</button>
            </div>
        </div>
        <div className='container' style={myStyle}>
                <div className='count'>
                    <p>Number of Words: {text.split(" ").length}</p>
                    <p>Number of Characters: {text.length}</p>
                    <p>Time to read Words: {0.008 * text.split(" ").length}</p>
                </div>
                <div className='preview'>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter Some text to Preview"}</p>
                </div>
        </div>
        </>
    );
}