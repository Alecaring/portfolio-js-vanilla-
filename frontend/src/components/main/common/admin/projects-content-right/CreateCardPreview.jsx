function CreateCardPreview({ title, subTitle, image, icon, description }) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <p>{title}</p>
                    <span>{subTitle}</span>
                </div>
                <div className="card-main">
                    <div className="card-image-cont">
                        {image && <img src={image} alt="Preview" />}
                        <span className="ref-icon">{icon}</span>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                        <button>view-project</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCardPreview;