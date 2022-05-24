import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-nextjs-toast";
import { useRouter } from "next/router";

function dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isError, message, isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user) {
      toast.notify("Must be logged in to view this page.", {
        title: "Error",
        type: "error",
      });
      router.push("/");
    }
  }, []);

  if(!user) {
    return <div></div>;
  }

  return <div>dashboard</div>;
}

export default dashboard;
