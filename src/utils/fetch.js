


const fetchData = async () => {
  const res = await fetch('https://www.reddit.com/r/reactjs.json')

  const data = await res.json()
  return data;

}

export default fetchData;
