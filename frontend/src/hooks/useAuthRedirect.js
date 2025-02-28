import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookies";

const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getCookie("TOKEN");
      if (token && window.location.pathname === "/login") {
        router.back(); // Redirect to the previous page
      }
    };
    checkLoginStatus();
  }, [router]);
};

export default useAuthRedirect;