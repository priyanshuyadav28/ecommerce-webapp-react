const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);

  async function fetchProductData() {

    setLoading(true);

    try {
      // fetch data from a url endpoint
      const res = await fetch(API_URL);

      // convert response to json
      const data = await res.json();
      
      setProducts(data);      

    } catch (error) {
      console.log("Something Went Wrong !");
    }

    setLoading(false);
    
  }

  return (
    <div>

    </div>
  );
};

export default Home;
