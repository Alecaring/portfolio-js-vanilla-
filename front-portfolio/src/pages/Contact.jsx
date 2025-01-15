import CommonInnerSectionLayoutLeftSide from "../components/layouts/CommonInnerSectionLayoutLeftSide";
import CommonInnerSectionLayoutRightSide from "../components/layouts/CommonInnerSectionLayoutRightSide";
import CommonSectionLayout from "../components/layouts/CommonSectionLayout";
import CommonSidebarLayout from "../components/layouts/CommonSidebarLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import "../scss/partials/contact.scss";
import Button from "../components/Button";
import { useContact } from "../contexts/ContactContext";



const Contact = () => {

    const {
        formData,
        contactRows,
        handleChange,
        handleSubmitEmail,
        isSuccess,
        setIsSuccess,
        
    } = useContact();

    return (
        <section className="container-main">
            <CommonSidebarLayout>

            </CommonSidebarLayout>
            <CommonSectionLayout>
                <CommonInnerSectionLayoutLeftSide>
                    <div className="container-left-contacts">
                        <div className="top-nav">
                            <div className="cell-opened">
                                <div className="inner-cellOpend">
                                    <FontAwesomeIcon icon={faX} />
                                    <span>_contacts</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-contacts">
                            {isSuccess ?
                                (
                                    <div className="container-response-success">
                                        <h1>Thank you! 🤘</h1>
                                        <p>Your message has been accepted. You will recieve answer really soon!</p>
                                        <Button onClick={() => setIsSuccess(false)} btxTxt="send-new-message" />
                                    </div>
                                ) : (

                                    <form onSubmit={handleSubmitEmail}>
                                        {["name", "email", "message"].map((field) => (
                                            <div key={field}>
                                                <label htmlFor={field}>_{field}:</label>
                                                {field === "message" ? (
                                                    <textarea
                                                        onChange={handleChange}
                                                        value={formData[field]}
                                                        name={field}
                                                        id={field}
                                                        placeholder={`_${field}...`}
                                                        cols="3"
                                                    ></textarea>
                                                ) : (
                                                    <input
                                                        onChange={handleChange}
                                                        value={formData[field]}
                                                        type={field === "email" ? "email" : "text"}
                                                        id={field}
                                                        name={field}
                                                        placeholder={field === "name" ? "Jhon Doe" : "user@gmail.com"}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                        <Button btxTxt="submit-message" type="submit" />
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </CommonInnerSectionLayoutLeftSide>
                <CommonInnerSectionLayoutRightSide>
                    <div className="container-right-contacts">
                        <div className="top-nav">
                            <div className="cell-opened">
                                <div className="inner-cellOpend">
                                    <FontAwesomeIcon icon={faX} />
                                    <span>_preview-contacts</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-contacts-graphics">{contactRows}</div>
                    </div>
                </CommonInnerSectionLayoutRightSide>
            </CommonSectionLayout>
        </section>
    );
};

export default Contact;
