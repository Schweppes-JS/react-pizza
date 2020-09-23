import React from "react";
import ContentLoader from "react-content-loader";

function LoadingPizzaBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="268" rx="3" ry="3" width="280" height="24" />
      <rect x="0" y="303" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="397" rx="3" ry="3" width="95" height="40" />
      <rect x="64" y="427" rx="0" ry="0" width="16" height="0" />
      <rect x="24" y="434" rx="0" ry="0" width="26" height="1" />
      <rect x="135" y="397" rx="20" ry="20" width="145" height="40" />
    </ContentLoader>
  );
}

export default LoadingPizzaBlock;
