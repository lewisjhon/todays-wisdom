"use client"

import React, {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/ko/wisdom.json');
                const jsonData = await res.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

  return (
      <>
          {/*<h1>{data.wisdom[0].author}</h1>*/}
          {/*<h3>{data.wisdom[0].phrase}</h3>*/}
          {/*<br/>*/}
          {/*<h1>{data.wisdom[1].author}</h1>*/}
          {/*<h3>{data.wisdom[1].phrase}</h3>*/}
      </>
  );
}
