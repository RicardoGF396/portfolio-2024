import { twMerge } from 'tailwind-merge';

type ButtonContentProps = {
  name: string;
  icon: React.ElementType;
  isSelected: boolean;
  onClick: () => void;
};

export default function ButtonContent({
  name,
  icon: Icon,
  isSelected,
  onClick,
}: ButtonContentProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'relative flex items-center gap-x-2 rounded-full py-2 pl-1.5 pr-3 transition-all',
        isSelected
          ? 'text-[#FAFAFA]'
          : 'text-[#0F0F0F] border hover:bg-[#E5E5E5]',
      )}
    >
      <Icon color={isSelected ? '#FAFAFA' : '#0F0F0F'} />
      {name}
    </button>
  );
}
