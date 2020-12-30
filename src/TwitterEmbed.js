import React, { useEffect, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import Loading from "./Loading";

const TwitterEmbed = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="twitter-embed">
      {loading ? (
        <Loading />
      ) : (
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "aning49",
          }}
          options={{
            height: "580",
            theme: "dark",
          }}
        />
      )}
    </div>
  );
};

export default TwitterEmbed;
