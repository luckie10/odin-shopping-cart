import { AppRoutes } from "@/routes";
import { Providers } from "@/providers";

const App = () => {
  return (
    <>
      <Providers>
        <AppRoutes />
      </Providers>
    </>
  );
};

export default App;
