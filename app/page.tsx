
import Card from "./card";
export default function Home() {
  return (
    <main>
      <div className='p-3'>
      <div className="w-full h-full flex flex-col items-center justify-center mt-10">
        <div>
      <img
        src="Logo.png"
        alt="Logo"
        style={{ height: "3rem" }}
      />  
      </div>   
            <h6 className="text-[3.5rem] font-bold mt-4">alkye</h6> 
            <h4 className="text-black/50">The easiest test you will ever do</h4>
      </div>
      <div className="overflow-x-auto mt-10 w-[2350px]">
      <Card />
      </div>
      </div>
    </main>
  );
}