import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Home/Content";
import SliderIn from "./Home/Slider";
import Img from "./Img";

function App() {
  const [recipies, setRecipies] = useState([]); // Initialize as empty array

  const products = [
    {
      text: '(Ultramarine,256 GB)',
      img: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Apple-iphone-16-ultramarine-256gb-Front-Back-View.png',
      title: 'Apple Iphone 16 Pro',
      price: '₹ 50,000'
    },
    {
      text: '(Winter Transparent,256 GB)',
      img: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Nothing-phone-2a-5g-black-256gb-12gb-ram-Front-Back-View.png',
      title: 'Nothing Phone (2a) 5G',
      price: '₹ 50,000'
    },
    {
      text: '(Titanium,256 GB)',
      img: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Samsung-galaxy-s24-ultra-5g-titanium-gray-256gb-12gb-ram-Front-Back-View.png',
      title: 'Samsung Galaxy S24 Ultra 5G',
      price: '₹ 50,000'
    },
    {
      text: '(SandStone Orange,256 GB)',
      img: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/nothing-phone-2a-plus-5g-Black-256gb-12gb-ram-front-back-view.png',
      title: 'Vivo T3 Pro',
      price: '₹ 50,000'
    },
    {
      text: '(SandStone Orange,256 GB)',
      img: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/nothing-phone-2a-plus-5g-Black-256gb-12gb-ram-front-back-view.png',
      title: 'Vivo T6 Pro',
      price: '₹ 50,000'
    }
  ];

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        console.log(data.recipes); // Correct property access
        setRecipies(data.recipes); // Update state with the correct property
      })
      .catch((e) => {
        console.log("There is some Error:", e);
      });
  }, []);

  return (
    <div className="">
      <Header />
      <Img />
      <Content />
      <SliderIn />

      <div className="flex gap-5 items-center">
        {products.map((data) =>
          <div key={data.title} className="border w-[20%] mt-10 h-[20vh]">
            <div className="bg-white w-full ">
              <img
                src={data.img}
                alt={data.title}
                className="w-[10vw] h-auto  justify-center items-center"
              />
              <div className="text-sm text-center">
                <span className="block">{data.title}</span>
                <span className="block">{data.text}</span>
                <span className="block">{data.price}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" gap-5 space-x-6  ">
  {recipies.map((items) =>
    <div key={items.id} className="border w-[60vw] mt-10 h-[30vh]"> {/* Increase width and height */}
      <div className="bg-white w-full h-full flex flex-col items-center justify-center"> {/* Flexbox for better alignment */}
        <img
          src={items.image} 
          alt={items.name}
          className="w-[50%] h-auto py-10" 
        />
        <div className="text-sm text-center mt-2"> {/* Add some margin for spacing */}
          <span className="block">{items.name}</span>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
  );
}

export default App;
