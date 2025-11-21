import { Suspense } from "react";
import Main from "./components/Main";
import LoadingFallback from "./components/ui/LoadingFallback";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingFallback />}>
        <Main />
      </Suspense>
    </main>
  );
}
