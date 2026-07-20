const MapSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=philipine&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our location on the map"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;