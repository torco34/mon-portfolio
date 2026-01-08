import { Rocket, Star } from "lucide-react";

type ProfileCardProps = {
  image: string;
  name: string;
  role: string;
  rating?: string;
  badgeIcon?: React.ReactNode;
};

export function ProfileCard({
  image,
  name,
  role,
  rating = "5.0",
  badgeIcon,
}: ProfileCardProps) {
  return (
    <div className="relative py-6 group">
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/15 shadow-2xl hover-glow">
        <div className="flex items-center gap-6">
          {/* Image with glow and badge */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse" />

            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-pink-400/50">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce-subtle">
              {badgeIcon ?? <Rocket className="w-5 h-5 text-white" />}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-gray-200 text-base mt-1">{role}</p>

            <div className="flex items-center gap-2 mt-3">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="text-sm text-gray-200">{rating}/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
