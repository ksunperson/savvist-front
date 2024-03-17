"use client"

declare global {
  interface Window {
    daum: any;
  }
}

export interface IAddr {
  address: string;
  zonecode: string;
  addr: string;
  zipNo: string;
  addrDetail: string;
}

interface AddressProps {
  setAddressData: (data: IAddr) => void;
}

export default function Address({ setAddressData }: AddressProps) {
  const onClickAddr = () => {
    new window.daum.Postcode({
      onComplete: function (data: IAddr) {
        (document.getElementById("addr") as HTMLInputElement).value =
          data.address;
        (document.getElementById("zipNo") as HTMLInputElement).value =
          data.zonecode;
        document.getElementById("addrDetail")?.focus();
        setAddressData(data); // 부모 컴포넌트로 주소 정보 전달
      },
    }).open();
  };

  return (
    <div>
      <input
        onClick={onClickAddr}
        id="zipNo"
        name="zipNo"
        type="text"
        placeholder="우편번호를 입력하세요"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
        readOnly
      />
      <input type="button" className="bg-custom-green text-white sm:text-xs py-2 px-4 ml-2 rounded" onClick={onClickAddr} value="우편번호 찾기" />
      <br />
      <input
        id="addr"
        name="addr"
        type="text"
        readOnly
        onClick={onClickAddr}
        placeholder="도로명 주소를 입력하세요"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
      />
      <br />
      <input
        id="addrDetail"
        name="addrDetail"
        type="text"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
        placeholder="상세주소"
      />
    </div>
  );
}