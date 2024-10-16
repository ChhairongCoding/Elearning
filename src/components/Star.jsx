// StarRating component for rendering dynamic stars
const StarRating = ({ rating }) => {
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ color: "gold" }}>
            ★
          </span>
        ); // Full star
      } else if (i - rating <= 0.5) {
        stars.push(
          <span key={i} style={{ color: "gold" }}>
            ☆
          </span>
        ); // Half star
      } else {
        stars.push(
          <span key={i} style={{ color: "gray" }}>
            ☆
          </span>
        ); // Empty star
      }
    }

    return stars;
  };

  return <div className="flex text-[26px]">{renderStars()}</div>;
};

export default StarRating;
