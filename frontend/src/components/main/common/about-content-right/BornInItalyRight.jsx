function BornInItalyRight() {
    return (
        <div className="container-born-in-italy">
            <div className="vsc-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <p>BornInItaly.js</p>
            </div>

            <div className="vsc-editor">
                <pre>
                    <code>
                        <span className="keyword">const </span>
                        <span className="variable">personalInfo</span>
                        <span className="operator"> = </span>
                        <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;<span className="property">birthplace</span><span className="operator">:</span>
                        <span className="string">"Italy"</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;<span className="property">city</span><span className="operator">:</span>
                        <span className="string">"Small picturesque town"</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;<span className="property">influences</span><span className="operator">:</span>
                        <span className="punctuation">[</span>
                        <span className="string">"Art"</span><span className="punctuation">,</span>
                        <span className="string">"Culture"</span><span className="punctuation">,</span>
                        <span className="string">"Dedication to detail"</span>
                        <span className="punctuation">]</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;<span className="property">values</span><span className="operator">: </span>
                        <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">passion</span><span className="operator">:</span>
                        <span className="string">"Design and Creativity"</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">mindset</span><span className="operator">:</span>
                        <span className="string">"Community and Collaboration"</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">curiosity</span><span className="operator">:</span>
                        <span className="string">"Open-minded approach to the world"</span>
                        <br />
                        &nbsp;&nbsp;<span className="punctuation">{`}`}</span><span className="punctuation">,</span>
                        <br />
                        &nbsp;&nbsp;<span className="property">takeaway</span><span className="operator">:</span>
                        <span className="string">"Growing up in Italy shaped who I am today."</span>
                        <br />
                        <span className="punctuation">{`}`}</span><span className="punctuation">;</span>
                        <br />
                        <span></span>
                        <br />

                        <span className="keyword">export </span><span className="keyword">function </span><span className="variable">getPersonalData() </span><span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;<span className="keyword">return </span><span className="variable">personalInfo</span>;
                        <br />
                        <span className="punctuation">{`};`}</span>




                    </code>
                </pre>
            </div>
        </div>

    )
}

export default BornInItalyRight;