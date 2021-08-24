import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({data: null, loading: true});
  useEffect(() => {
    setState({data: null, loading: true})
    fetch(url)
    .then(resp => resp.text())
    .then(result => {
      setState({data: result, loading: false})
    });
  }, [url])

  return state;
}