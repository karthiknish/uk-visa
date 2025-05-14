"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function PashtoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="text-right" dir="rtl" lang="ps">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">
              د برېتانیا ویزې مرستې مشاورین
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              د برېتانیا ویزې او استوګنې مشورې خدماتو کې مخکښ اداره
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">زموږ په اړه</h3>
              <p className="text-gray-700 mb-4">
                د برېتانیا ویزې مرستې مشاورین د ویزې او استوګنې مشورې خدماتو په
                برخه کې یو له مخکښو ادارو څخه دي. دا اداره د ویزې او استوګنې
                چارو کې د متخصصو مشاورینو یوه ډله لري.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">زموږ تخصص</h3>
              <p className="text-gray-700 mb-4">
                موږ د مهاجرتي چارو په ټولو برخو کې تخصص لرو او موخه مو دا ده چې
                تاسو ته غوره ممکنه خدمات وړاندې کړو.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">زموږ خدمات</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>د برېتانیا د سفر سند (Travel Document)</li>
                <li>الکترونیکي ویزې (E-Visas)</li>
                <li>د برېتانیا پاسپورټ غوښتنه</li>
                <li>د میړونو لپاره دایمي استوګنه</li>
                <li>د ماهرو کارګرانو لپاره دایمي استوګنه</li>
                <li>د نامزدي ویزه</li>
                <li>د میړه یا مېرمنې ویزه</li>
                <li>د زده‌کړې ویزه</li>
                <li>د فارغ‌التحصیلۍ ویزه</li>
                <li>تجارتي ویزې</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                د افغانستان د وګړو ملاتړ
              </h3>
              <p className="text-gray-700 mb-4">
                موږ د لاندې پروګرامونو لپاره د مشورې ورکولو او د غوښتنلیکونو
                ډکولو کې مرسته وړاندې کوو:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>د افغانستان د وګړو د انتقال او مرستې پروګرام (ARAP)</li>
                <li>د برازیل بشردوستانه وېزه</li>
                <li>د پاکستان ETA وېزه</li>
                <li>درې میاشتنی او شپږ میاشتنی سیاحتي او درملنی وېزې</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                له موږ سره اړیکه ونیسئ
              </h3>
              <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-lg mt-6">
                <ContactForm
                  labels={{
                    heading: "وړیا مشوره ترلاسه کړئ",
                    firstName: "نوم",
                    lastName: "تخلص",
                    email: "د برېښنالیک پته",
                    country: "د استوګنې هېواد",
                    phone: "د موبایل شمېره",
                    details: "نور توضیحات",
                    submit: "استول",
                    success: "مننه! ستاسو پیغام په بریالیتوب سره استول شوی دی.",
                    error:
                      "د فورم په استولو کې ناکامي وشوه. مهرباني وکړئ بیا هڅه وکړئ.",
                  }}
                  endpoint="/api/contact"
                  thankYouPage="/thank-you"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
