import Header from "@/components/header/Header";
export default function Home() {
  return (
    <section className=" sm:px-16 pb-10 px-6  h-[100vh] bg-gradient-to-bl from-[#000044] via-indigo-900 to-[#000044]">
      <Header />
      <h1 className="text-7xl font-bold text-white">
        this is sunil
      </h1>
    </section>
  );
}
// bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500
// bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500
// text-[bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500]
