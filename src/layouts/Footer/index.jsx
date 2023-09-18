export default function Footer() {
  return (
    <>
      <div className="bg-black w-full h-auto">
        <div className="container mx-auto flex justify-center py-20 gap-60">
          <div className="w-[40%]">
            <h3 className="text-white text-[30px] leading-8">
              Dapatkan email dari kita untuk info <br /> tentang item baru,
              penjualan, dan lainnya.
            </h3>
            <p className="text-gray-400 text-[15px] mt-4">
              Kami akan mengirimkan email berisi voucher senilai RP.164.000
              untuk pesanan pertama kamu di atas RP.800.000.
            </p>

            <div>
              <input
                className="w-[350px] h-[50px] mt-7 rounded placeholder:text-[15px]"
                type="email"
                placeholder="Masukan alamat email kamu"
              />
              <button className="h-[50px] w-[130px] text-white font-semibold rounded border border-white">
                Langganan
              </button>
              <p className="text-gray-500 mt-3 text-xs">
                By subscribing you agree to our Terms & Conditions and Privacy &
                Cookies Policy.
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <h3 className="text-white text-[30px] leading-8">
              Butuh bantuan? <br />
              (+62) 853 5678 90
            </h3>
            <p className="text-gray-400 text-[15px] mt-3">
              We are available 8:00am – 7:00pm
            </p>
            <div className="flex gap-2 items-center mt-8">
              <a href="https://www.apple.com/app-store/">
                <img
                  src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/app-store.png"
                  alt="ios app"
                />
              </a>
              <a href="https://play.google.com/store/">
                <img
                  src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/google-play.png"
                  alt="android app"
                />
              </a>
            </div>
            <p className="text-gray-500 text-[12px] mt-3">
              <span className="font-bold">Shopping App:</span> Try our View in
              Your Room feature, manage registries and save payment info.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="container mx-auto flex py-16 border-b-2">
          <div className="w-[440px]">
            <h1 className="text-[40px] font-bold">Kleta</h1>
            <p className="text-[14px] mt-5 w-[340px]">
              Sebagai Pusat Fashion Online di Asia, kami menciptakan
              kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas
              jangkauan produk, mulai dari produk internasional hingga produk
              lokal dambaan. Kami menjadikan Anda sebagai pusatnya. Bersama
              KLETA, You Own Now.
            </p>
            <p className="mt-3">(+62) 853 5678 90 – kleta@gmail.com</p>
          </div>
          <div className="flex">
            <div className="w-[190px]">
              <h3 className="font-bold">Information</h3>
              <ul className="mt-4 text-[15px] leading-7">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Returns Policy</li>
              </ul>
            </div>
            <div className="w-[190px]">
              <h3 className="font-bold">Account</h3>
              <ul className="mt-4 text-[15px] leading-7">
                <li>Dashboard</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Account details</li>
                <li>Track My Orders</li>
              </ul>
            </div>
            <div className="w-[190px]">
              <h3 className="font-bold">Shop</h3>
              <ul className="mt-4 text-[15px] leading-7">
                <li>Affliate</li>
                <li>Bestsellers</li>
                <li>Discount</li>
                <li>Latest Products</li>
                <li>Sale Products</li>
              </ul>
            </div>
            <div className="w-[190px]">
              <h3 className="font-bold">Categories</h3>
              <ul className="mt-4 text-[15px] leading-7">
                <li>Dashboard</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Account details</li>
                <li>Track My Orders</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between py-12">
          <div className="text-[14px]">Copyright 2023 © Kleta.</div>
          <div>
            <img
              src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/06/cards.png"
              alt="payment"
            />
          </div>
          <div>
            <ul className="flex text-[14px] gap-4">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Returns Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
