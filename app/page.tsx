import Image from "next/image";
import { Metadata } from "next/types";
import photo from "@/public/Julie_LinkedIn_pic.png";

export const metadata: Metadata = {
  title: "Julie Jakinovich | Infection Prevention Specialist",
  description: "Digital business card for Julie Jakinovich",
};

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <Image
            src={photo}
            width={200}
            height={200}
            alt="Profile Picture"
            className="rounded-full w-24 h-24 mb-4"
            placeholder="blur"
          />
          <div className="flex flex-col text-center">
            <h1 className="text-lg text-slate-800 font-semibold mb-1">
              Julie Jakinovich, MPH, CHES, CIC
            </h1>
            <h4 className="text-slate-500">Infection Prevention Specialist</h4>
          </div>
          <div className="space-y-4 w-full mt-6">
            <a
              href=" https://www.linkedin.com/in/julie-jakinovich"
              target="_blank"
              rel="noreferrer"
              className="block w-full border-2 border-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-slate-800 hover:bg-blue-200 transition-colors"
            >
              <span className="mr-2">💼</span> LinkedIn Profile
            </a>
            <a
              href="mailto:jjakino1@hfhs.org"
              className="block w-full border-2 border-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-slate-800 hover:bg-blue-200 transition-colors"
            >
              <span className="mr-2">✉️</span> Email
            </a>
            <a
              href="tel:+12486131603"
              className="block w-full border-2 border-blue-200 text-center py-3 rounded-lg text-lg font-semibold text-slate-800 hover:bg-blue-200 transition-colors"
            >
              <span className="mr-2">📱</span> Cell Phone
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
