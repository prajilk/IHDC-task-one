import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

const Home = lazy(() => import("./pages/home"));
const Register = lazy(() => import("./pages/register"));

function PageLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
        <Loader2 className="animate-spin" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
