import React, { useEffect, useState } from 'react'
import ProductCart2 from '../Home/HomeComponents/ProductCart2'
import SectionCard from '../../Components/Shared/SectionCard';
import Banner from '../Home/HomeComponents/Banner';

const Shop = () => {
    const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const getData = async () => {
          const res = await fetch("/categories.json");
          const { categories } = await res.json();
          setCategories(categories);
        };
        getData();
      }, []);
    
      useEffect(() => {
        const getData = async () => {
          const res = await fetch("/products.json");
          const { products } = await res.json();
          setProducts(products);
        };
        getData();
      }, []);
    
      const topSelling = products.slice(0, 3);
      const trendingProducts = products.slice(4, 7);
      const recentlyAdded = products.slice(8, 11);
      const topRated = products.slice(12, 15);


  return (
    <div>


        <section className="px-3 md:px-5">
            <Banner />
        </section>



        <section className="pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-3 md:px-10">

          {/* Top Selling */}
          <div>
            <p className="font-semibold text-2xl pb-4 border-b-2 border-gray-300">Top Selling</p>
            {topSelling.map((item) => (
              <ProductCart2 key={item.id} name={item.name} rating={item.rating} price={item.price} oldPrice={item.oldPrice} img={item.image1} />
            ))}
          </div>

          {/* Trending */}
          <div>
            <p className="font-semibold text-2xl pb-4 border-b-2 border-gray-300">Trending</p>
            {trendingProducts.map((item) => (
              <ProductCart2 key={item.id} name={item.name} rating={item.rating} price={item.price} oldPrice={item.oldPrice} img={item.image1} />
            ))}
          </div>

          {/* Recently Added */}
          <div>
            <p className="font-semibold text-2xl pb-4 border-b-2 border-gray-300">Recently Added</p>
            {recentlyAdded.map((item) => (
              <ProductCart2 key={item.id} name={item.name} rating={item.rating} price={item.price} oldPrice={item.oldPrice} img={item.image1} />
            ))}
          </div>

          {/* Top Rated */}
          <div>
            <p className="font-semibold text-2xl pb-4 border-b-2 border-gray-300">Top Rated</p>
            {topRated.map((item) => (
              <ProductCart2 key={item.id} name={item.name} rating={item.rating} price={item.price} oldPrice={item.oldPrice} img={item.image1} />
            ))}
          </div>

        </div>
      </section>

      <SectionCard />
    </div>
  )
}

export default Shop