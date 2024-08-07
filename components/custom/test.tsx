export default function TestComponent() {
  return <div className="overflow-hidden bg-gray-600 h-screen">

  <div  className=" bg-yellow-500 origin-top float-right mt-9 mr-9 w-72 text-center translate-x-[50%] rotate-45">
    <div className="">Hi!</div>
    <div className="">I am nice ribbon</div>
    <div className="">That sits in a corner. </div>
  </div>

  <div className="absolute"> I am normal content on the page (not affected by ribbon)</div>

</div>
}