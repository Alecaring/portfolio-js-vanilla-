function HardSkillsRight() {
    return (
      <div className="container-hard-skills">
        <div className="vsc-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p>HardSkills.js</p>
        </div>
  
        <div className="vsc-editor">
          <pre>
            <code>
              <span className="comment">// SQL query to retrieve advanced hard skills</span>
              <br />
              <span className="keyword">SELECT</span>{" "}
              <span className="variable">skill_name</span>,{" "}
              <span className="variable">proficiency_level</span>,{" "}
              <span className="variable">years_of_experience</span>
              <br />
              <span className="keyword">FROM</span>{" "}
              <span className="variable">hard_skills</span>
              <br />
              <span className="keyword">WHERE</span>{" "}
              <span className="variable">category</span> ={" "}
              <span className="string">'Programming'</span>
              <br />
              <span className="keyword">AND</span>{" "}
              <span className="variable">proficiency_level</span> &gt;={" "}
              <span className="number">8</span>;
              <br />
              <br />
              <span className="comment">// Result:</span>
              <br />
              <span className="punctuation">[</span>
              <br />
              &nbsp;&nbsp;<span className="punctuation">&#123;</span>{" "}
              <span className="property">skill_name</span>:{" "}
              <span className="string">"JavaScript"</span>,{" "}
              <span className="property">proficiency_level</span>:{" "}
              <span className="number">9</span>,{" "}
              <span className="property">years_of_experience</span>:{" "}
              <span className="number">6</span>{" "}
              <span className="punctuation">&#125;</span>,
              <br />
              &nbsp;&nbsp;<span className="punctuation">&#123;</span>{" "}
              <span className="property">skill_name</span>:{" "}
              <span className="string">"React"</span>,{" "}
              <span className="property">proficiency_level</span>:{" "}
              <span className="number">8</span>,{" "}
              <span className="property">years_of_experience</span>:{" "}
              <span className="number">5</span>{" "}
              <span className="punctuation">&#125;</span>
              <br />
              <span className="punctuation">]</span>
            </code>
          </pre>
        </div>
      </div>
    );
  }
  
  export default HardSkillsRight;
  