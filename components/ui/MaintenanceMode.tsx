import Image from "next/image";
export default function MaintenanceMode() {
     return (
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
               <section className="relative section text-center">
                    <div className="w-full z-10 mx-auto ">
                         <Image
                              className="mx-auto mb-3"
                              width={260}
                              height={160}
                              src="/logo.png"
                              alt="Fielmedina logo"
                              priority
                         />
                         <span className="text-md text-[#b65d37] font-semibold" id="element" />
                         <h1 className="text-5xl font-bold mb-5">
                              Site <span className="text-[#b65d37]">Under Construction</span>
                         </h1>
                         <p className="mb-5 text-center font-semibold">
                              Exciting things are underway! Our site is currently undergoing
                              renovations to bring you an enhanced experience.
                              <br />
                              Stay tuned for a fresh look and exciting updates.
                              <br />
                              Thank you for your patience!
                         </p>
                    </div>
               </section>
          </div>

     );
}