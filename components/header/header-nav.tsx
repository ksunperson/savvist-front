import { TbMenu2 } from "react-icons/tb";

export default function HeaderNavigation() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start ml-10">
        <TbMenu2 size={30} />
      </div>
      <div className="flex justify-end mr-10">
        <div className="mr-6">로그인</div>
        <div>카트</div>
      </div>
    </div>

  )
}