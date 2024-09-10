import { twMerge } from 'tailwind-merge';

type ButtonContentProps = {
  name: string;
  icon: React.ElementType;
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
};

export default function ButtonContent({
  name,
  icon: Icon,
  isSelected,
  onClick,
  isMobile,
}: ButtonContentProps) {
  const baseClasses =
    'relative flex items-center gap-x-2 rounded-full py-2 px-3 transition-all whitespace-nowrap';

  const getButtonClasses = () => {
    if (isMobile) {
      return isSelected
        ? 'bg-[#0F0F0F] text-white'
        : 'bg-[#E5E5E5] text-[#0F0F0F]';
    }
    return isSelected
      ? 'text-[#FAFAFA]'
      : 'text-[#0F0F0F] border hover:bg-[#E5E5E5]';
  };

  const getIconColor = () => {
    if (isMobile) {
      return isSelected ? '#FAFAFA' : '#0F0F0F';
    }
    return isSelected ? '#FAFAFA' : '#0F0F0F';
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(baseClasses, getButtonClasses())}
    >
      <Icon className="shrink-0" color={getIconColor()} />
      <span>{name}</span>
    </button>
  );
}
