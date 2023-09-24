import { AiOutlineClose } from "react-icons/ai";

export default function index({ isOpen, closeSidebar, closeSembarang }) {
  return (
    <div
      className={`bg-black bg-opacity-50 fixed w-screen h-screen z-50 inset-0  transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-500`}
      onClick={closeSembarang}
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl p-[20px]">
        <button onClick={closeSidebar} className="absolute top-4 right-4">
          <AiOutlineClose />
        </button>
        {/* isi sidebar disini */}
        <h1 className="font-bold text-[30px]">Kleta</h1>
        <h1 className="font-semibold">Main Menu</h1>
        <h1>Man</h1>
        <h1>Woman</h1>
        <h1>Baby</h1>
        <h1>Kid</h1>
        <h1>Sports</h1>
      </div>
    </div>
    // <>asdasda</>
  );
}
