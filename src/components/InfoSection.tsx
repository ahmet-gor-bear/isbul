"use client";

import { InfoSectinProps } from "@/types/types";

const InfoSection = ({ title, data }: InfoSectinProps) => {
  return (
    <div
      className={
        "p-3 max-md:bg-white max-md:shadow-md print:shadow-none rounded overflow-hidden mt-3"
      }
    >
      <div className={"text-2xl pb-3 md:font-medium md:text-[#164781]"}>
        {title}
      </div>
      <div className={" divide-y md:divide-dotted"}>
        {data.map((el, index) => {
          return (
            <div key={index} className={"flex flex-col md:flex-row py-3"}>
              <div
                className={
                  "flex flex-row justify-between md:basis-1/3 md:font-medium md:text-[#164781]"
                }
              >
                <div className={""}>
                  {el.key}
                  <span className={"md:hidden"}>:</span>
                </div>
                <div className={"max-md:hidden"}>:</div>
              </div>
              <div className={"max-md:text-sm md:ml-3 "}>{el.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSection;
