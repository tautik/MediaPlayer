import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCHED_VIDEO_API, API_KEY } from "../constants/youtubeAPI";
import { useSearchParams, Link } from "react-router-dom";
import { onToogle } from "../utils/toogleSlice";
import { useDispatch } from "react-redux";

const SearchCard = ({
  channel,
  title,
  published,
  poster,
  channelImg,
  description,
}) => {
  const viewFun = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };
  // const durations = duration.replace(/P|T|S/g, "").replace(/H|M/g, ":");
  return (
    <div className="w-[100%] flex justify-center bg-gray-50 py-4 ">
      <div className="flex ml-2">
        <div className="flex-1">
          <img className="bg-cover " src={poster} alt="" />
        </div>
        <div className="ml-2 flex-1 ">
          <h2 className="text-[1.2rem] font-bold">{title}</h2>
          <h3 className="text-[1rem] font-semibold">{channel}</h3>
          <div className="flex text-[0.8rem]">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searhQuery = searchParams.get("search_query");
  useEffect(() => {
    fetchData();
    // dispatch(onToogle());
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCHED_VIDEO_API + searhQuery + "&key=" + API_KEY
    );
    const json = await data.json();
    setResults(json.items);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[60%] bg-slate-500 mx-auto mt-5">
        {results &&
          results.map((item) => {
            return (
              <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
                <SearchCard
                  channel={item?.snippet?.channelTitle}
                  title={item?.snippet?.title}
                  published={item?.snippet?.publishedAt}
                  poster={item?.snippet?.thumbnails?.medium?.url}
                  channelImg={item?.snippet?.thumbnails?.default?.url}
                  description={item?.snippet?.description}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SearchResult;
