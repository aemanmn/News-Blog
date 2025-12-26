import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drawer = ({ open, onClose }) => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeadlines = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-5"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        readOnly
      />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-5"
          className="drawer-overlay"
          onClick={onClose}
        ></label>

        <div className="w-80 bg-base-200 min-h-full p-4 flex flex-col">
          {/* Header */}
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
            Top Headlines
          </h2>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {loading && <p className="text-gray-500">Loading...</p>}
            {!loading &&
              headlines.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-3 p-2 rounded hover:bg-gray-100 transition"
                >
                  {article.title}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
