import React from 'react';
import './Feature.css';

export default function Feature() {
    return (
        <section className="features-section">
            <div className="container">
                <h2>✨ Features</h2>
                <ul>
                    <li>📝 Live text formatting (Font size, family, color, and alignment)</li>
                    <li>🔠 Convert to UPPERCASE, lowercase, and Title Case</li>
                    <li>📋 One-click copy text</li>
                    <li>🚫 Clear text instantly</li>
                    <li>🧠 Real-time word and character count</li>
                    <li>⏱️ Reading time estimate</li>
                    <li>🌓 Light/Dark mode toggle</li>
                </ul>
            </div>
        </section>
    );
}
