import Image from "next/image";
import InfoSection from "@/components/InfoSection";
import Header from "@/components/Header";
import { DummyDataType, HeaderPropsType } from "@/types/types";
import { Call, Link, Location, Sms } from "iconic-react";

export default function Home() {
  const data: DummyDataType = {
    info: {
      name: "Habib Ağ",
      age: 60,
      job: "Muhasebe",
      updated_at: "24 Mayıs 2024",
      last_login: "24 Mayıs 2024",
    },
    contact: [
      {
        key: "Adres",
        value: "Beykoz / İstanbul - Anadolu / Türkiye",
        icon: <Location />,
      },
      {
        key: "Telefon",
        value: "+90 (555) 555 55 55",
        icon: <Call />,
      },
      {
        key: "E-Posta",
        value: "habipagca@hotmail.com",
        icon: <Sms />,
      },
      {
        key: "Website",
        value: "http://127.0.0.1:8000/profilim/cv/14/iletisim-bilg...",
        icon: <Link />,
      },
    ],
    personal: [
      {
        key: "Uyruk",
        value: "Türkiye",
      },
      {
        key: "Doğum Tarihi",
        value: "02.03.1964",
      },
      {
        key: "Cinsiyet",
        value: "Erkek",
      },
      {
        key: "Medeni Hal",
        value: "Bekar",
      },
      {
        key: "Askerlik Durumu",
        value: "Belirtilmemiş",
      },
      {
        key: "Engel Durumu",
        value: "Ruh Hastalıkları",
      },
      {
        key: "Engel Yüzdesi",
        value: "%100",
      },
      {
        key: "Engel Detayı",
        value: "gnnnn",
      },
      {
        key: "Sigara Kullanımı",
        value: "Hayır",
      },
      {
        key: "Ehliyet Sınıfı",
        value: "M",
      },
      {
        key: "Src Belgesi",
        value: "SRC 1 , SRC 2 , SRC 3 , SRC 4 , SRC 5(ADR)",
      },
    ],
    experience: [
      {
        key: "Meslek",
        value: "Muhasebe",
      },
      {
        key: "Çalışma Durumu",
        value: "Çalışmıyor",
      },
      {
        key: "Seyahat Durumu",
        value: "Seyahat Edemem",
      },
      {
        key: "Çalışmak İstediği Şehirler",
        value: "İstanbul - Avrupa , İstanbul - Anadolu",
      },
      {
        key: "Çalışma Durumu Tercihleri",
        value: "Part Time , Dönemsel",
      },
      {
        key: "Çalışmak İstediği Sektörler",
        value: "Endüstri",
      },
      {
        key: "Çalışmak İstediği Pozisyonlar",
        value: "Farketmez (Tüm Pozisyonlar)",
      },
      {
        key: "Çalışmak İstediği Bölümler",
        value: "Farketmez (Tüm Bölümler) , Aktif Pazarlama",
      },
      {
        key: "Ücret Beklentisi",
        value: "6000 - 7000 TL",
      },
      {
        key: "Toplam İş Deneyimi",
        value: "1-2 Yıl",
      },
    ],
  };

  return (
    <main className="flex flex-col items-center font-poppins ">
      <div className={"container max-w-screen-lg p-3 transition-all"}>
        <Header data={data.info}></Header>

        <div
          className={
            "flex flex-col md:flex-row md:bg-white md:rounded overflow-hidden"
          }
        >
          <div className={"basis-0 md:basis-1/3 md:bg-[#164781]"}>
            <div className={"flex flex-col justify-center p-5"}>
              <div className={"flex justify-center"}>
                <div className={"inline-block rounded-full  overflow-hidden"}>
                  <Image
                    src={"/download.jpeg"}
                    alt={"avatar"}
                    width={120}
                    height={120}
                  ></Image>
                </div>
              </div>
              <div
                className={
                  "flex justify-center mt-5 md:hidden text-xl font-medium"
                }
              >
                {data.info.name} ({data.info.age})
              </div>
            </div>
            <div
              className={
                "p-5 max-md:bg-white max-md:shadow-md print:shadow-none md:text-white rounded overflow-hidden"
              }
            >
              <div className={"text-xl pb-3 md:hidden"}>İletişim</div>

              <div className={"max-md:divide-y"}>
                {data.contact.map((el, index) => {
                  return (
                    <div key={index}>
                      <div className={"flex pb-1"}>
                        <div className={"max-md:hidden mr-3"}>{el.icon}</div>
                        {el.key}:
                      </div>
                      <div className={"text-sm font-light pb-3"}>
                        {el.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"basis-0 md:basis-2/3 md:p-3 divide-y"}>
            <div
              className={
                "p-3 max-md:bg-white max-md:shadow-md print:shadow-none rounded overflow-hidden mt-3"
              }
            >
              <div className={"max-md:hidden"}>
                <span className={"font-medium text-4xl text-[#164781]"}>
                  {data.info.name}
                </span>{" "}
                <span className={"font-medium text-xl"}>({data.info.age})</span>
              </div>
              <div className={"max-md:hidden pb-5"}>
                <span className={"font-light text-xl"}>{data.info.job}</span>
              </div>
              <div className={"text-xl pb-3 md:hidden"}>
                Kişisel Ve Mesleki Bilgiler
              </div>
              <div className={"pb-1 text-lg"}>fff</div>
            </div>

            <InfoSection
              title={"Kişisel Bilgiler"}
              data={data.personal}
            ></InfoSection>

            <InfoSection
              title={"İş Deneyimi"}
              data={data.experience}
            ></InfoSection>
          </div>
        </div>
      </div>
    </main>
  );
}
