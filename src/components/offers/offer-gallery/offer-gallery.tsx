const OfferGalleryItem = ({ offerImage }: { offerImage: string }) => (
  <div className="offer__image-wrapper">
    <img
      className="offer__image"
      src={offerImage}
      alt="Photo studio"
    />
  </div>
);

const offerImages: string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'];

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offerImages.map((image) => <OfferGalleryItem offerImage={image} key={image} />)}
      </div>
    </div>
  );
}


export default OfferGallery;
