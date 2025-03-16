import Image from "next/image"


export default function Hero() {
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="hidden sm:block sm:absolute top-0 left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="hidden sm:block sm:absolute top-0 right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="hidden sm:block sm:absolute bottom-20 left-60 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image className="z-[-1] lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="Image illustration" src="/background.png" title="Image illustration"
          width={300}
          height={300}
        />

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 typewriter">Surya Akhri Ramadhan</h1>
          <p className="mb-8 leading-relaxed">
            a Software Engineer from Bandung, Indonesia
          </p>
        </div>
      </div>
    </section>
  )
}
