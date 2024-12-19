import "../../scss/partials/mainContacts.scss";
import BaseMainDiv2 from "./common/BaseMainDiv2";
import { useState } from "react";

function MainContacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <div className="sidebar">
            </div>
            <div className="main">
                <div className="container-left-contacts">
                    <div className="top-nav">
                        <p>contacts</p>
                    </div>
                    <div className="form-contacts">
                        <form action="/">

                            <div>
                                <label htmlFor="name">_name:</label>
                                <input onChange={handleName} value={name} type="text" id="name" name="name" placeholder="Jhon Doe" />
                            </div>

                            <div>
                                <label htmlFor="email">_email:</label>
                                <input onChange={handleEmail} value={email} type="email" id="email" name="email" placeholder="user@gmail.com" />
                            </div>

                            <div>
                                <label htmlFor="message">_message:</label>
                                <textarea onChange={handleMessage} value={message} name="message" id="message" placeholder="_message..." cols="3"></textarea>
                            </div>

                            <button type="submit">submit-message</button>
                        </form>
                    </div>
                </div>
                <div className="container-right-contacts">
                    <div className="top-nav">
                        <p>contacts</p>
                    </div>
                    <div className="form-contacts-graphics">
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">1</span> <span className="const">const</span> <span className="const-assignament">button</span> = <span className="method">document.getElementById<span className="class">("#sendBtn");</span></span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">2</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">3</span> <span className="const">const</span> <span className="const-assignament">message</span> = <span>&#123;</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">4</span> <span className="const-assignament space1">name:</span> <span className="class">"{name.trim()}",</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">5</span> <span className="const-assignament space1">email:</span> <span className="class">"{email.trim()}",</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">6</span> <span className="const-assignament space1">message:</span> <span className="class">"{message.trim()}",</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">7</span> <span className="const-assignament space1">date:</span> <span className="class">"Thu 21 Apr",</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">8</span> <span>&#125;</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">9</span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">10</span> <span className="method">button.addEventListener<span className="grey">(</span><span className="class">"click",</span><span className="grey">() =&#62;</span><span></span> <span className="grey">&#123;</span></span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">11</span> <span className="space1 method">form.send<span>(</span>message<span>);</span></span>
                        </div>
                        <div className="cont-rows-contacts">
                            <span className="colls-numered">12</span> <span>&#125;)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContacts;