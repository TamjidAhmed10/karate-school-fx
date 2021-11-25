const imagelinks = [
  { imagelink: "http://karateschool.se/images/gallery/1610473913.jpg" },
];
const GridPhotoGallery = () => {
    return (
        <div>
            <div>{imagelinks.map((item) => (
                item.imagelink
            ))}</div>
        </div>
    )
}

export default GridPhotoGallery
