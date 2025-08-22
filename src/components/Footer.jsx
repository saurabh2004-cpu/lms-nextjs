import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#383086] text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between">
          {/* Brand and Links Section */}
          <div className="font-light poppins text-base align-center">
            <div className="mb-6">
              <img src="/logo/RD_logo__1_-removebg-preview 1.png" alt="Ruchira Darda" className="h-25 w-50" />
            </div>

            <div className="mb-6 ml-2 font-light poppins ">
              <p className="mb-2 cursor-pointer hover:opacity-80 leading-10 text-[16px] font-[400] poppins">Terms of service</p>
              <p className="mb-2 cursor-pointer hover:opacity-80 leading-10 text-[16px] font-[400] poppins">Privacy & Policy</p>
              <p className="cursor-pointer hover:opacity-80 leading-10 text-[16px] font-[400] poppins">Security</p>
            </div>

            <div className="flex gap-2">
              <button className="text-white hover:bg-white/10 p-2 rounded transition-colors">
                <Instagram size={20} />
              </button>
              <button className="text-white hover:bg-white/10 p-2 rounded transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-white hover:bg-white/10 p-2 rounded transition-colors">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="font-light poppins text-base">
            <div className="flex items-center mb-4">
              <h3 className="font-bold text-lg md:text-[24px] font-bold">Address</h3>
              <MapPin className="ml-2 text-lg" size={20} />
            </div>
            <p className="leading-10 text-[16px] font-[300] poppins">
              Lokmat Bhavan, Jalna Road
              <br />
              Aurangabad 431001
              <br />
              Maharashtra, India
            </p>
          </div>

          {/* Contact Section */}
          <div className="font-light poppins text-base">
            <div className="flex items-center mb-4">
              <Phone className="mr-2 text-lg" size={20} />
              <h3 className="font-bold text-lg md:text-[24px] font-bold">Contact</h3>
            </div>
            <p className="mb-2 leading-10 text-[16px] font-[300] poppins">Mobile No: 098503 72800</p>
            <p className="mb-2 leading-10 text-[16px] font-[300] poppins">Telephone: 02402485302</p>
            <p className="leading-10 text-[16px] font-[300] poppins">Email: Teamruchiradarda@gmail.com</p>
          </div>

          {/* Working Hours Section */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-lg" size={20} />
              <h3 className="font-bold text-lg poppins md:text-[24px] font-bold">Working Hours</h3>
            </div>
            <p className="text-base poppins text-[16px] font-[300] poppins">10:00am to 6:00pm</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 pt-6">
          <p className="text-white font-normal poppins text-[16px] font-[400] poppins">@2024 RuchiraDarda All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
