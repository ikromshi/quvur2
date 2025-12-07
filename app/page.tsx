import type { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "QUVUR",
};

export default function Page() {
  return <HomePage />;
}
