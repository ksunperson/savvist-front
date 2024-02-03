export default function NavTabs() {
  const commonHoverStyles = "cursor-pointer hover:underline hover:decoration-4 hover:decoration-custom-green hover:underline-offset-8";

  return (
    <div className="flex ml-16 items-center">
      <div className={`mr-4 ${commonHoverStyles}`}>
        designers
      </div>
      <div className={commonHoverStyles}>
        category
      </div>
    </div>
  );
}
