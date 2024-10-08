function App() {

  const name = "Pankaj";

  function add(a, b) {
    return a + b;
  }

  const URL = "https://github.com/thepankajsinha";
  
  return (
    <>
      {/* This is a JSX */}
      <h1>Hello World</h1>

      {/* Embedding Expression in JSX using {} */}
      <h2>Hello {name}</h2>
      <h2>Hello {5 + 10}</h2>

      {/* How to use javaScript function in JSX */}
      <h2>10 + 20 = {add(10,20)}</h2>

      {/* How to use dynamic attributes */}
      <a href={URL}>Github Profile</a>

    </>
  )
}

export default App
