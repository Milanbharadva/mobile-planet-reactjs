import Carousel from './Carousel'
function App() {
  let slides = [
    "apple.jpg",
    "samsung.jpg",
    "oneplus.jpg"
  ];

  return (
    <div className="w-[60%] m-auto">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;