function SoftSkills() {
    return (
        <div className="container-soft-skills">
            <div className="vsc-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <p>SoftSkills.js</p>
            </div>

            <div className="vsc-editor">
                <pre>
                    <code>
                        <span className="comment">// SQL query to retrieve web development skills</span>
                        <br />
                        <span className="keyword">SELECT</span> <span className="variable">skill_name</span>, 
                        <span className="variable"> skill_level</span> 
                        <br />
                        <span className="keyword">FROM</span> <span className="variable">developer_skills</span> 
                        <br />
                        <span className="keyword">WHERE</span> <span className="variable">category</span> = <span className="string">'Web Development'</span>;
                        <br />
                        <br />
                        <span className="comment">// Result:</span>
                        <br />
                        <span className="punctuation">[</span>
                        <br />
                        &nbsp;&nbsp;<span className="punctuation">{`{`}</span> <span className="property">skill_name</span>: 
                        <span className="string">"HTML"</span>, 
                        <span className="property"> skill_level</span>: 
                        <span className="string">"Expert"</span> <span className="punctuation">{`}`}</span>,
                        <br />
                        &nbsp;&nbsp;<span className="punctuation">{`{`}</span> <span className="property">skill_name</span>: 
                        <span className="string">"CSS"</span>, 
                        <span className="property"> skill_level</span>: 
                        <span className="string">"Advanced"</span> <span className="punctuation">{`}`}</span>,
                        <br />
                        &nbsp;&nbsp;<span className="punctuation">{`{`}</span> <span className="property">skill_name</span>: 
                        <span className="string">"JavaScript"</span>, 
                        <span className="property"> skill_level</span>: 
                        <span className="string">"Intermediate"</span> <span className="punctuation">{`}`}</span>
                        <br />
                        <span className="punctuation">]</span>;
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default SoftSkills;
