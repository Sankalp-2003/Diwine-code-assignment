type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  name: string;
  size?: AvatarSize;
  className?: string;
}

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-rose-500",
  "bg-purple-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-cyan-600",
  "bg-lime-600",
  "bg-violet-500",
  "bg-sky-500",
  "bg-fuchsia-500",
  "bg-red-500",
  "bg-amber-600",
] as const;

const SIZE_CLASSES: Record<AvatarSize, string> = {
  sm: "w-8 h-8 text-sm",
  md: "w-14 h-14 text-xl",
  lg: "w-20 h-20 text-2xl",
};

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function getAvatarColorClass(name: string): string {
  if (!name) return AVATAR_COLORS[0];
  const index = hashString(name) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase() || "?";
}

export default function Avatar({
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const colorClass = getAvatarColorClass(name);
  const sizeClass = SIZE_CLASSES[size];
  const initial = getInitial(name);

  return (
    <div
      className={`flex items-center justify-center shrink-0 rounded-full font-semibold text-white ${colorClass} ${sizeClass} ${className}`}
      title={name}
      aria-label={name}
    >
      {initial}
    </div>
  );
}
