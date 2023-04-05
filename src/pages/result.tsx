import { RootLayout } from "@/core/layouts/RootLayout";
import { HomePage } from "@/core/pages/HomePage";
import { ResultPage } from "@/core/pages/ResultPage";

const Page = () => {
  const hasError = false;
  return (
    <RootLayout>
      <ResultPage />
    </RootLayout>
  );
};

export default Page;
