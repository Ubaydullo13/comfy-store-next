import Image from "next/image";
import card1 from '../../assets/card1.webp'
function Product1() {
    return (
      <section className="align-element py-20 px-40">
        <section>
          <div className="text-md breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <Image 
            src={card1}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
            />
            <div>
              <h1 className="capitalize text-3xl font-bold">avant-garde lamp</h1>
              <h4 className="text-xl text-neutral-content font-bold mt-2">Modenza</h4>
              <p className="mt-3 text-xl">$179.99</p>
              <p className="mt-6 leading-8">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <div className="mt-6">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  colors
                </h4>
                <div className="mt-2">
                  <button
                    type="button"
                    className="badge w-6 h-6 mr-2 border-2 border-secondary"
                    style={{
                      background: "rgb(51, 255, 87);"
  
                    }}
                  ></button>
                  <button
                    type="button"
                    className="badge w-6 h-6 mr-2 false"
                    style={{
                      background: "rgb(51, 102, 255)"
  
                    }}
                  ></button>
                </div>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label" for="amount">
                  <h4 className="text-md font-medium -tracking-wider capitalize">
                    amount
                  </h4>
                </label>
                <select
                  className="select select-secondary select-bordered select-md"
                  id="amount"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="mt-10">
                <button className="btn btn-secondary btn-md uppercase">Add to cart</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
  
  export default Product1;