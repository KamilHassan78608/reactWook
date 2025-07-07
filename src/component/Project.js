import React from 'react';
import './Project.css';

export default function Project() {
    return (
        <section className="projects-section">
            <div className="container">
                <h2>📁 Projects</h2>
                <p>This Notepad tool is part of a larger suite of productivity tools I'm building using React.</p>
                <div className="project-grid">
                    <div className="project-card">
                        <h3>Text Analyzer</h3>
                        <p>A React-based tool that analyzes text and gives real-time statistics like word count, readability, and more.</p>
                    </div>
                    <div className="project-card">
                        <h3>Clipboard Pro</h3>
                        <p>A utility for saving multiple clipboard entries and formatting them with custom styles.</p>
                    </div>
                    <div className="project-card">
                        <h3>Text Formatter</h3>
                        <p>Drag-and-drop editor with advanced formatting options for blogs, resumes, and documents.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
