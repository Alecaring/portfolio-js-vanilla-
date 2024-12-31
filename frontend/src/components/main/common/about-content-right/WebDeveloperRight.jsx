function WebDeveloper() {
    return (
        <div className="container-web-dev-skills">
            <div className="vsc-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <p>DatabaseConnection.php</p>
            </div>

            <div className="vsc-editor">
                <pre>
                    <code>
                        <span className="php-tag">&lt;?php</span>
                        <br />
                        <br />
                        <span className="keyword">class</span> <span className="classname">Database</span> <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;<span className="keyword">private</span> <span className="variable">$host</span> <span className="operator">=</span> <span className="string">"localhost"</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;<span className="keyword">private</span> <span className="variable">$username</span> <span className="operator">=</span> <span className="string">"root"</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;<span className="keyword">private</span> <span className="variable">$password</span> <span className="operator">=</span> <span className="string">""</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;<span className="keyword">private</span> <span className="variable">$dbname</span> <span className="operator">=</span> <span className="string">"portfolio"</span><span className="punctuation">;</span>
                        <br />
                        <br />
                        &nbsp;&nbsp;<span className="keyword">public</span> <span className="keyword">function</span> <span className="method">connect</span><span className="punctuation">()</span> <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">try</span> <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">$dsn</span> <span className="operator">=</span> <span className="string">"mysql:host="</span> <span className="operator">.</span> <span className="variable">$this</span><span className="punctuation">-></span><span className="variable">host</span> <span className="operator">.</span> <span className="string">";dbname="</span> <span className="operator">.</span> <span className="variable">$this</span><span className="punctuation">-></span><span className="variable">dbname</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">$pdo</span> <span className="operator">=</span> <span className="keyword">new</span> <span className="classname">PDO</span><span className="punctuation">(</span><span className="variable">$dsn</span><span className="punctuation">,</span> <span className="variable">$this</span><span className="punctuation">-></span><span className="variable">username</span><span className="punctuation">,</span> <span className="variable">$this</span><span className="punctuation">-></span><span className="variable">password</span><span className="punctuation">)</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">$pdo</span><span className="punctuation">-></span><span className="method">setAttribute</span><span className="punctuation">(</span><span className="classname">PDO</span><span className="punctuation">::</span><span className="variable">ATTR_ERRMODE</span><span className="punctuation">,</span> <span className="classname">PDO</span><span className="punctuation">::</span><span className="variable">ERRMODE_EXCEPTION</span><span className="punctuation">)</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="variable">$pdo</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="punctuation">}</span> <span className="keyword">catch</span> <span className="punctuation">(</span><span className="classname">PDOException</span> <span className="variable">$e</span><span className="punctuation">)</span> <span className="punctuation">{`{`}</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">die</span><span className="punctuation">(</span><span className="string">"Connection failed: "</span> <span className="operator">.</span> <span className="variable">$e</span><span className="punctuation">-></span><span className="method">getMessage</span><span className="punctuation">()</span><span className="punctuation">)</span><span className="punctuation">;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="punctuation">}</span>
                        <br />
                        &nbsp;&nbsp;<span className="punctuation">}</span>
                        <br />
                        <span className="punctuation">{`}`}</span>
                        <br />
                        <br />
                        <span className="php-tag">?&gt;</span>
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default WebDeveloper;