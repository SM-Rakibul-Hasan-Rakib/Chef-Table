const Banner = (props) => {
    return (
      
        <div className="bg-[url(../src/assets/chef-hero.png)] rounded-2xl">
        <div
          className="hero lg:h-[500px] rounded-2xl ">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-white  text-[30px] font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <button className="btn bg-green-400 text-black  border-none  font-bold rounded-3xl hover:bg-green-400 outline-none ">
                Explore Now
              </button>
              <button class="btn btn-outline  text-white px-8 rounded-full ml-3 ">Our Feedback</button>
            </div>
          </div>
        </div>
      </div> 
      
    );
  };
  
export default Banner
