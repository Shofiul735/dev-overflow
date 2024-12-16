"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";

export const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      throw new Error("Not implemented");
    } catch (error) {
      toast({
        title: "Sign-in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-warp gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-3 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>

      <Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-3 py-3.5">
        <Image
          src="/icons/google.svg"
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};
