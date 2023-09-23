import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Sidebar } from "@/components";
import { IconContext } from "react-icons";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="bg-green text-white">
        <div className="container mx-auto text-center text-[13px] py-3">
          SUMMER SALE UNTUK SEMUA ITEMS DAN GRATIS PENGIRIMAN INTERNATIONAL -
          OFF 50%! <span className="font-bold">SHOP NOW</span>
        </div>
      </div>
      <div className="bg-white w-full h-auto border-b-[1px]">
        <div className="container mx-auto flex justify-between py-2">
          <div className="flex items-center gap-2">
            <AiOutlineInstagram />
            <span className="font-medium">3.1M Followers</span>
            <Menu as="div" className=" pt-1 cursor-pointer h-5">
              <Menu.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className=" w-[240px] px-[20px] py-[20px] mt-[5px] bg-white absolute left-[37px] border-[1px] z-50">
                  <div className="px-1 py-1 flex flex-col">
                    <Menu.Item className="flex items-center gap-4" as="section">
                      <div>
                        <IconContext.Provider value={{ size: "18px" }}>
                          <AiFillFacebook className="w-5" />
                        </IconContext.Provider>
                      </div>
                      <div>
                        <button className="text-black text-green">
                          Facebook
                        </button>
                      </div>
                    </Menu.Item>
                    <Menu.Item
                      className="flex items-center gap-4 mt-[16px]"
                      as="section"
                    >
                      <IconContext.Provider value={{ size: "18px" }}>
                        <AiFillTwitterSquare className="w-5" />
                      </IconContext.Provider>
                      <button className="text-black">Twitter</button>
                    </Menu.Item>
                    <Menu.Item
                      className="flex items-center gap-4 mt-[16px]"
                      as="section"
                    >
                      <IconContext.Provider value={{ size: "18px" }}>
                        <AiFillInstagram className="w-5" />
                      </IconContext.Provider>
                      <button className="text-black">Instagram</button>
                    </Menu.Item>
                    <Menu.Item
                      className="flex items-center gap-4 mt-[16px]"
                      as="section"
                    >
                      <IconContext.Provider value={{ size: "18px" }}>
                        <AiFillLinkedin className="w-5" />
                      </IconContext.Provider>
                      <button className="text-black">Linkedin</button>
                    </Menu.Item>
                    <Menu.Item>
                      <p className="text-[12px] text-gray-400 mt-[20px]">
                        Follow us on social media, be the first to know about
                        discounts and innovations.
                      </p>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="text-sm">
            Gratis Ongkir ke seluruh dunia untuk semua pesanan di atas
            Rp.2.300.000 . <span className="text-red">Click and Shop Now.</span>
          </div>
          <div className="text-[13px]">Order Tracking</div>
        </div>
      </div>
      <div className="bg-white w-full h-auto">
        <div className="container mx-auto h-[80px] flex">
          <div className="relative z-40">
            <button onClick={toggleSidebar} className="absolute top-4 left-4">
              Open Sidebar
            </button>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
            {/* Isi konten utama disini */}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
