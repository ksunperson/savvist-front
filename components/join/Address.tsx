import { useState } from 'react';

export interface IAddr {
  address: string;
  zonecode: string;
  addrDetail: string;
}

interface AddressProps {
  onAddressChange: (addr: IAddr) => void;
}

export default function Address({ onAddressChange }: AddressProps) {
  const [address, setAddress] = useState<IAddr>({ address: "", zonecode: "", addrDetail: "" });

  const onClickAddr = () => {
    new window.daum.Postcode({
      onComplete: function (data: IAddr) {
        setAddress(prev => ({
          ...prev,
          address: data.address,
          zonecode: data.zonecode
        }));
        (document.getElementById("addrDetail") as HTMLInputElement).focus();
      },
    }).open();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => {
      const updatedAddress = { ...prevAddress, [name]: value };
      onAddressChange(updatedAddress);
      return updatedAddress;
    });
  };

  return (
    <div>
      <input
        onClick={onClickAddr}
        type="text"
        name="zonecode"
        placeholder="우편번호를 입력하세요"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
        value={address.zonecode}
        readOnly
      />
      <input type="button" className="bg-custom-green text-white sm:text-xs py-2 px-4 ml-2 rounded" onClick={onClickAddr} value="우편번호 찾기" />
      <br />
      <input
        onClick={onClickAddr}
        type="text"
        name="address"
        value={address.address}
        readOnly
        placeholder="도로명 주소를 입력하세요"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
      />
      <br />
      <input
        type="text"
        name="addrDetail"
        id="addrDetail"
        value={address.addrDetail}
        onChange={handleChange}
        placeholder="상세주소"
        className="p-2 w-64 placeholder:text-gray-400 sm:text-xs outline-none border"
      />
    </div>
  );
};