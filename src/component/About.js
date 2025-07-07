import React from 'react';

import './About.css';

export default function About() {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About NotepadX</h2>
                <p>
                    <strong>NotepadX</strong> is a simple yet powerful web-based text manipulation tool built using React. Whether you need to quickly change the case of your text, remove extra spaces, count characters and words, or just jot down ideas — NotepadX makes it easy and efficient.
                </p>

                <h3>✨ Features:</h3>
                <ul>
                    <li>Convert text to UPPERCASE or lowercase</li>
                    <li>Remove extra spaces</li>
                    <li>Copy text with one click</li>
                    <li>Real-time character & word counter</li>
                    <li>Clean and intuitive interface</li>
                </ul>

                <p>
                    Whether you're a student, writer, or developer, NotepadX can save you time and help you focus on your content.
                </p>
            </div>
        </section>
    );
}
