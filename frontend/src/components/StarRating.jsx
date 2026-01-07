function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map((n) => (
        <span key={n} className={n <= rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;