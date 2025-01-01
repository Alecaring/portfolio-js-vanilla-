function CreateCard({ title, subTitle, image, icon, description, handleTitleChange, handleSubTitleChange, handleImageChange, handleIconChange, handleDescriptionChange }) {
    return (
        <>
            <div className="form-create-card-admin">

                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="subtitle-container">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input
                        type="text"
                        id="subtitle"
                        value={subTitle}
                        onChange={handleSubTitleChange}
                    />
                </div>

                <div className="image-container">
                    <label htmlFor="image">Image URL</label>
                    <textarea
                        type="text"
                        id="image"
                        value={image}
                        onChange={handleImageChange}
                    />
                </div>

                <div className="icon-container">
                    <label htmlFor="icon">Icon</label>
                    <input
                        type="text"
                        id="icon"
                        value={icon}
                        onChange={handleIconChange}
                    />
                </div>

                <div className="description-container">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateCard;