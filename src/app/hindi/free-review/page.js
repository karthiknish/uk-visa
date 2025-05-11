"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/animations";

export default function FreeReviewHindi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              फ्री रिव्यू
            </h1>
            <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-12">
              <ScaleIn>
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-8">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="पेशेवर वीज़ा परामर्श और मूल्यांकन सेवाएं"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScaleIn>

              <FadeIn>
                <p className="text-lg mb-6">
                  यदि आपकी कोई अभिवासन सम्पर्कित समस्या है, तो आप हमारे पेशाजरों
                  से एक मूल्यांकन करवा सकते हैं। हम आपको आपके केस के बारे में
                  सही फैसला लेने के लिए सारी जानकारी देंगे।
                </p>

                <p className="text-lg mb-6">
                  हम अभिवासन मामलों पर कानूनी सलाह देते हैं। हमारे वकीलों के पास
                  काफी अनुभव है और वे जज, सालिशी या मध्यस्थता कार्यवाहियों में
                  क्लाइंट्स का प्रतिनिधित्व करने में दक्ष हैं।
                </p>

                <p className="text-lg mb-6">
                  यदि आप एक अप्रामाणिक अभिवासी हैं, तो अभिवासन प्रक्रिया आपके
                  लिए जटिल हो सकती है। हम आपको वर्क परमिट प्राप्त करने में
                  सहायता कर सकते हैं और वर्क परमिट नवीनीकरण में भी मदद करते हैं।
                </p>

                <div className="mt-12 text-center">
                  <Link
                    href="/hindi/contact"
                    className="inline-block bg-[#003D6E] text-white px-8 py-3 rounded-lg hover:bg-[#002D4E] transition-colors"
                  >
                    अपना निःशुल्क मूल्यांकन प्राप्त करें
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
