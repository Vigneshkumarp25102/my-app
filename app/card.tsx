"use client";

import { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://alkyetest-738240239910.us-central1.run.app/myapp/list/"
      );

      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-2 mt-10 overflow-auto">
      {data.map((item) => (
        <div
          key={item.id}
          style={{ 
            backgroundImage: `url(${item.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "30rem",
           }}
          className="border rounded-2xl border-gray-300 p-6 flex flex-col gap-4 hover:opacity-80 cursor-pointer relative w-xl h-xl"
        >
          <p className="bg-black text-white rounded-2xl px-6 w-fit">
            {item.prompt}
          </p>
            <p className="text-white text-sm">{item.short_description}</p>
        </div>
      ))}
    </div>
  );
}