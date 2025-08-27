"use client"

export default function RuchiraWorkSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-10 poppins relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-7xl mx-auto">
        
        {/* LEFT COLUMN - IMAGE */}
        <div className="md:absolute md:col-span-6 flex justify-center md:justify-start z-10">
          <div className="md:absolute md:relative md:bottom-2 mt-[-16px] md:mt-3 w-full md:w-[29.625rem] min-h-[300px] md:h-[31.9375rem] rounded-[16px] overflow-hidden shadow-lg">
            <img
              src="/images/image-264.png"
              alt="Ruchira working at her desk"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* RIGHT COLUMN - TEXT */}
        <div className="md:col-span-9 flex justify-center md:absolute md:relative md:left-70">
          <div className="bg-[#383086] text-white p-6 md:p-10 md:pl-32 rounded-lg w-full h-auto md:h-[35.75rem] flex flex-col justify-center">
            
            <p className="text-sm md:text-base leading-relaxed font-medium mb-6 md:ml-28 ">
              Ruchira is a person who is passionate about working with people across all 
              age groups to help them learn to BE the best, most empowered versions 
              of themselves.
            </p>

            <p className="text-sm md:text-base leading-relaxed font-medium mb-6 md:ml-28">
              She is in her element as a storyteller with young children, something 
              that she has transformed into a ritual with her two young sons.
            </p>

            <p className="text-sm md:text-base leading-relaxed font-medium mb-6 md:ml-28">
              She is committed to her journey as a Mindfulness Coach and it is her 
              vision that she, along with her team, will work on the BEing state of 
              people and organizations so that they can in turn create more effective 
              and successful Doing states for themselves.
            </p>

            <p className="text-sm md:text-base leading-relaxed font-medium md:ml-28">
              In her own words, "First we need to learn to BE the most authentic versions 
              of ourselves, the Doing will follow automatically!" For the past many years, 
              Ruchira has worked consistently at her vision and has an enormous body of 
              experience to show for it.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
