// Import necessary dependencies from React
import { useEffect, useState } from "react";

// Custom hook for fetching data from a specified URL
const Usefetch = (url) => {
  // State variables to manage the fetched data, loading state, and error state
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Effect hook to execute the data fetching logic when the URL changes
  useEffect(() => {
    // Use the Fetch API to make a GET request to the specified URL
    fetch(url)
      .then((res) => {
        // Check if the response is not successful and throw an error
        if (!res.ok) {
          setIsPending(false);
          throw Error("Could not fetch the data");
        }
        // Parse the response as JSON and return the data
        return res.json();
      })
      .then((data) => {
        // Set the fetched data and update the loading state
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        // Handle any errors during the fetch and update the error state
        setError("3as");
        setIsPending(false);
        console.log(err.message);
      });
  }, [url]); // Re-run the effect when the URL changes

  // Return an object containing the fetched data, loading state, and error state
  return { data, isPending, error };
};

export default Usefetch;
