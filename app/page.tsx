import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Julie Jakinovich | Infection Preventionist",
  description: "Digital business card for Julie Jakinovich",
};

export default function Home() {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="border-gray-300 border-8 shadow-lg rounded-xl max-w-sm w-full">
    //     <div className="bg-white p-8 rounded-xl">
    //       <div className="flex flex-col items-center">
    //         <Image
    //           src="https://picsum.photos/200" // Add your profile image in public folder
    //           width={200}
    //           height={200}
    //           alt="Profile Picture"
    //           className="rounded-full w-24 h-24 mb-4"
    //         />
    //         <h1 className="text-xl font-semibold mb-2">Julie Jakinovich</h1>
    //         <p className="text-gray-600 text-sm mb-4">
    //           Infection Preventionist
    //         </p>
    //         <div className="w-full">
    //           {/* List of Links */}
    //           <a
    //             href="https://example.com"
    //             className="text-blue-500 hover:text-blue-700 font-semibold block mb-2"
    //           >
    //             Link 1
    //           </a>
    //           <a
    //             href="https://example.com"
    //             className="text-blue-500 hover:text-blue-700 font-semibold block mb-2"
    //           >
    //             Link 2
    //           </a>
    //           <a
    //             href="https://example.com"
    //             className="text-blue-500 hover:text-blue-700 font-semibold block mb-2"
    //           >
    //             Link 3
    //           </a>
    //           {/* Add more links as needed */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/Julie_LinkedIn_pic.png"
            width={200}
            height={200}
            alt="Profile Picture"
            className="rounded-full w-24 h-24 mb-4"
          />
          <div className="flex flex-col text-center">
            <h1 className="text-lg text-slate-800 font-semibold mb-1">
              Julie Jakinovich, MPH, CHES, CIC
            </h1>
            <h4 className="text-slate-500">Infection Prevention Specialist</h4>
          </div>
          <div className="space-y-4 w-full mt-6">
            <a
              href="https://www.linkedin.com/in/julie-jakinovich-mph-ches-cic-6954b367/"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
            >
              💼 LinkedIn Profile
            </a>
            <a
              href="mailto:juliejakinovich@gmail.com"
              className="block w-full bg-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
            >
              ✉️ Email
            </a>
            <a
              href="tel:+13135858164"
              className="block w-full bg-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
            >
              📱 Cell Phone
            </a>
            {/* <a
              href="https://example.com"
              className="block w-full bg-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-blue-300 transition-colors"
            >
              Book With Me
            </a>
            <a
              href="https://example.com"
              className="block w-full bg-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-blue-300 transition-colors"
            >
              Get My Books
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
