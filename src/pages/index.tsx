import { RootLayout } from "@/core/layouts/RootLayout";
import { HomePage } from "@/core/pages/HomePage";
const Page = () => {
  const hasError = false;
  return (
    <RootLayout>
      <HomePage />
      {/* {!hasError ? (
				<HomePage topCategories={topCategories} allCategories={allCategories} />
			) : (
				<ErrorPage>Bilinmeyen bir hata oluştu</ErrorPage>
			)} */}
    </RootLayout>
  );
};

export default Page;
