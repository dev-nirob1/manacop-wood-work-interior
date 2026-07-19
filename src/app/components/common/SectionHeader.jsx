const SectionHeader = ({ 
  subtitle, 
  title, 
  highlightedText, 
  textAlign = "center",
  className = ""
}) => {
  return (
    <div className={`${textAlign === "center" ? "text-center" : "text-left"} ${className}`}>
      {/* Subtitle with underline */}
      <div className="inline-block relative mb-3">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          {subtitle}
        </span>
        <div className={`w-full h-0.5 bg-primary mt-1 rounded-full ${textAlign === "center" ? "mx-auto" : ""}`}></div>
      </div>
      
      {/* Title */}
      <h2 className={`text-3xl sm:text-4xl font-bold text-dark ${textAlign === "center" ? "" : "text-left"}`}>
        {title}
        {highlightedText && (
          <span className="text-primary"> {highlightedText}</span>
        )}
      </h2>
    </div>
  );
};

export default SectionHeader;