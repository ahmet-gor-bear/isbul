"use client";
import { HeaderProps } from "@/types/types";
import { Calendar, DirectInbox, Printer, Share } from "iconic-react";

const Header = ({ data }: HeaderProps) => {
  return (
    <div
      className={
        "flex flex-row justify-between items-center p-5 my-5 max-md:hidden rounded shadow bg-white"
      }
    >
      <div className={"flex flex-col"}>
        <div className={"text-[#164781] font-medium text-2xl pb-3"}>
          CV ÖNİZLEME
        </div>
        <div className={"flex justify-center items-center"}>
          <Calendar size={16} />
          <div className={"text-sm font-medium ml-1"}>Güncelleme Tarihi:</div>
          <div className={"text-sm font-medium text-[#164781] ml-1"}>
            24 Mayıs 2024
          </div>
          <Calendar size={16} className={"ml-3"} />
          <div className={"text-sm font-medium ml-1"}>Son Giriş Tarihi:</div>
          <div className={"text-sm font-medium text-[#164781] ml-1"}>
            24 Mayıs 2024
          </div>
        </div>
      </div>
      <div className={"flex gap-2"}>
        <div
          onClick={() => {
            window.print();
          }}
          className={
            "p-3 bg-[#164781] hover:bg-[#195edd] transition-all rounded"
          }
        >
          <Printer color={"#FFFFFF"} />
        </div>
        <div
          className={
            "p-3 bg-[#164781] hover:bg-[#195edd] transition-all rounded"
          }
        >
          <DirectInbox color={"#FFFFFF"} />
        </div>
        <div
          className={
            "p-3 bg-[#164781] hover:bg-[#195edd] transition-all rounded"
          }
        >
          <Share color={"#FFFFFF"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
