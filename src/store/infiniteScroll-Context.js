import { createContext, useContext, useState, useEffect } from "react";

const InfiniteScrollContext = createContext();

const InfiniteScrollContextProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setPageNumber(pageNumber + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <InfiniteScrollContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        handleScroll,
        loading,
        setLoading,
      }}
    >
      {children}
    </InfiniteScrollContext.Provider>
  );
};

export const useInfiniteScroll = () => {
  return useContext(InfiniteScrollContext);
};

export default InfiniteScrollContextProvider;
