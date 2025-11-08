import React, { useEffect, useState } from "react";
import Banner from "./HomeComponents/Banner";
import CategoryCard from "./HomeComponents/CategoryCard";
import SmallBanner from "./HomeComponents/SmallBanner";
import ProductCard from "./HomeComponents/ProductCard";
import Counter from "./HomeComponents/Counter";
import ProductCart2 from "./HomeComponents/ProductCart2";
import SectionCard from "../../Components/Shared/SectionCard";

const Home = () => {
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

  const filteredProduct = products.slice(0, 5);
  const topSelling = products.slice(0, 3);
  const trendingProducts = products.slice(4, 7);
  const recentlyAdded = products.slice(8, 11);
  const topRated = products.slice(12, 15);

  return (
    <div className="w-full">

      {/* Section 1 */}
      <section className="px-3 md:px-5">
        <Banner />
      </section>

      {/* Section 2 – Featured Categories */}
      <section className="px-3 md:px-10 mt-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">Featured Categories</p>

          <ul className="flex flex-wrap gap-3 md:gap-10 text-sm md:text-base">
            <li className="font-semibold cursor-pointer hover:text-[#238155]">Cake & Milk</li>
            <li className="font-semibold cursor-pointer hover:text-[#238155]">Coffes & Teas</li>
            <li className="font-semibold cursor-pointer hover:text-[#238155]">Pet Foods</li>
            <li className="font-semibold cursor-pointer hover:text-[#238155]">Vegetables</li>
          </ul>
        </div>

        <div className="py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4">
            {categories.map((item) => (
              <CategoryCard
                key={item.id}
                img={item.image}
                title={item.name}
                item={item.totalItems}
                id={item.id}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 – Small Banners */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-3 md:px-10 pb-10">
          <SmallBanner text="Everyday Fresh & Clean with Our Products" img="/src/assets/img/small-banner-1.png" />
          <SmallBanner text="Make your Breakfast Healthy and Easy" img="/src/assets/img/small-banner-2.png" />
          <SmallBanner text="The best Organic Products Online" img="/src/assets/img/small-banner-3.png" />
        </div>
      </section>

      {/* Section 4 – Popular Products */}
      <section>
        <div className="px-3 md:px-10 py-3">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-5 gap-4">
            <p className="text-2xl md:text-3xl font-semibold">Popular Products</p>

            <ul className="flex flex-wrap gap-3 text-sm font-semibold">
              <li className="hover:text-[#238155] cursor-pointer">All</li>
              <li className="hover:text-[#238155] cursor-pointer">Milks & Dairies</li>
              <li className="hover:text-[#238155] cursor-pointer">Coffes & Teas</li>
              <li className="hover:text-[#238155] cursor-pointer">Pet Foods</li>
              <li className="hover:text-[#238155] cursor-pointer">Meats</li>
              <li className="hover:text-[#238155] cursor-pointer">Vegetables</li>
              <li className="hover:text-[#238155] cursor-pointer">Fruits</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.image1}
                brand={item.brand}
                rating={item.rating}
                price={item.price}
                oldPrice={item.oldPrice}
                label={item.label}
                labelColor={item.labelColor}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Daily best sells */}
      <section className="px-3 md:px-10 mt-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-5 gap-4">
          <p className="text-2xl md:text-3xl font-semibold">Daily best sells</p>

          <ul className="flex flex-wrap gap-3 text-sm font-semibold">
            <li className="hover:text-[#238155] cursor-pointer">Featured</li>
            <li className="hover:text-[#238155] cursor-pointer">Popular</li>
            <li className="hover:text-[#238155] cursor-pointer">New added</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredProduct.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.image1}
              brand={item.brand}
              rating={item.rating}
              price={item.price}
              oldPrice={item.oldPrice}
              label={item.label}
              labelColor={item.labelColor}
            />
          ))}
        </div>
      </section>

      {/* Counter Cards */}
      <section className="px-3 md:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Counter img="/src/assets/img/counter-1.png" title="Seeds of Change Organic Quinoa, Brown, & Red Rice" rating="4.5" brand="NestFood" price="32.85" oldPrice="33.8" />
          <Counter img="/src/assets/img/counter-2.png" title="Perdue Simply Smart Organics Gluten Free" rating="5.0" brand="Old El Paso" price="34.85" oldPrice="36.8" />
          <Counter img="/src/assets/img/counter-3.png" title="Signature Wood-Fired Mushroom and Caramelized" rating="4.3" brand="Progresso" price="12.5" oldPrice="15.5" />
          <Counter img="/src/assets/img/counter-4.png" title="Simply Lemonade with Raspberry Juice" rating="4.6" brand="Yoplait" price="15.85" oldPrice="17.7" />
        </div>
      </section>

      {/* 4 Lists */}
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

      {/* Banner */}
      <section className="px-3 md:px-5">
        <Banner />
      </section>

      {/* Section Card */}
      <section className="px-3 md:px-10">
        <SectionCard />
      </section>

    </div>
  );
};

export default Home;
