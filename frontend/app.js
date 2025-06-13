useEffect(() => {
  fetch('/api')
    .then(res => res.json())
    .then(data => setMessage(data.message));
}, []);
