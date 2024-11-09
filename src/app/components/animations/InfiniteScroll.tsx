import React from "react";
import { Fragment } from "react";

const greetings = [
  "Hello", // English
  "नमस्ते", // Hindi
  "নমস্কার", // Bengali
  "வணக்கம்", // Tamil
  "నమస్తే", // Telugu
  "ನಮಸ್ಕಾರ", // Kannada
  "નમસ્તે", // Gujarati
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "നമസ്തേ", // Malayalam
  "ନମସ୍କାର", // Odia
  "নমস্কাৰ", // Assamese
  "ಹಲೋ", // Tulu
  "Nomoshkaar", // Santali (Latin script)
  "Johar", // Ho
  "জোহার", // Santali (Bengali script)
  "ज़िन्दाबाद", // Rajasthani
  "ખુશ આમદીદ", // Kutchi
  "नमस्कार", // Maithili
  "Nomoskar", // Bodo
  "खोलाको नमस्ते", // Kumaoni
  "हर हर महादेव", // Bhojpuri
  "জয় গোহিল", // Bishnupriya Manipuri
  "खुळा", // Gondi
  "अय्यूबोवन", // Sinhalese (Indian origin)
  "कूल-याह", // Mizo
  "ນະຄະນິຕິຂ", // Assamese-Ahom
  "शुभ प्रभात", // Sindhi
  "Ram Ram", // Haryanvi
  "હેલ્લો", // Ahirani
  "खुबले", // Nagpuri
  "ਘਰ ਆਲਾ", // Pahari Punjabi
  "जुहार", // Korku
  "അമ്മേ ബൊഹേ", // Karbi
  "वडक्कम", // Badaga
  "السلام عليكم", // Urdu
  "你好", // Chinese
  "こんにちは", // Japanese
];
const InfiniteScroll = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container mx-auto w-[90%] overflow-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 animate-move-left [animation-duration:20s]">
          {[new Array(2)].map((_, idx) => {
            return (
              <Fragment key={idx}>
                {greetings.map((greeting) => (
                  <div
                    key={greeting}
                    className="text-gray-400 font-semibold text-lg flex flex-none px-4 py-2"
                  >
                    <span>{greeting}</span>
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
