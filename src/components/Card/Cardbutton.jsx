import { SignInButton } from "@clerk/clerk-react";
import { Heart, RotateCw } from "lucide-react";
export const CardSubmittbutton = ({ isPending, isFavorite }) => {
  return (
    <button>
      {isPending ? (
        <RotateCw className="animate-spin" />
      ) : isFavorite ? (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="red"
          size={40}
          stroke="white"
        />
      ) : (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="black"
          fillOpacity="60%"
          size={40}
          stroke="white"
        />
      )}

      {/* {isPending ? (
        <RotateCw className="animate-spin"/>
      ) : (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="red"
          size={40}
          stroke="white"
        />
      )} */}
    </button>
  );
};

export const CardSignInbutton = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <button>
          <Heart
            className="hover:scale-110 hover:duration-300"
            fill="black"
            fillOpacity="60%"
            size={40}
            stroke="white"
          />
        </button>
      </SignInButton>
    </div>
  );
};
