function CreateCard({ title, subTitle, image, icon, description, handleTitleChange, handleSubTitleChange, handleImageChange, handleIconChange, handleDescriptionChange }) {
    return (
        <>
            <form className="form-create-card-admin">

                <h1>Create New Card</h1>
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

                <div className="icon-container">
                    <label htmlFor="icon">Icon</label>
                    <input
                        type="text"
                        id="icon"
                        value={icon}
                        onChange={handleIconChange}
                    />
                </div>



                <div className="image-container">
                    <label htmlFor="image">
                        <p>Upload Image</p>
                        <span className="file-name">{image}</span>
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
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

                <div className="button-card-create">
                    <button>clicca</button>
                </div>
            </form>
        </>
    )
}

export default CreateCard;