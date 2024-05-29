import { HeaderProps } from "@/types/types";

const Header = ({ data }: HeaderProps) => {
  return (
    <div
      className={
        "flex justify-between p-5 my-5 max-md:hidden rounded shadow bg-white"
      }
    >
      <div className={"flex flex-col"}>
        <div>CV ÖNİZLEME</div>
        <div>
          Güncelleme Tarihi: 24 Mayıs 2024 Son Giriş Tarihi: 29 Mayıs 2024
        </div>
      </div>
      <div>content</div>
    </div>
  );
};

export default Header;
