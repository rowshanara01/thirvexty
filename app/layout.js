import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: "thrivext",
  description: "Notes in Bangla covering various modern web technologies.",
};

const CustomNavbar = () => {
  return (
    <Navbar
      logo={
        <div className="flex items-center  w-full justify-between relative">
          <span className="text-3xl font-bold">Thrivext</span>
        </div>
      }
      projectLink="https://github.com/Takib-Ahmed/thrivext"
    />
  );
};

const footer = (
  <div className="nx-text-gray-500">
    <Footer>
      <h1 className="nx-text-center">
        copyright {new Date().getFullYear()} © thrivext.
      </h1>
    </Footer>
  </div>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/thrivext/cropped-bEvKgIiUSIy-93xr4nDckg.webp"
          type="image/webp"
        />
      </Head>
      <body suppressHydrationWarning>
        <Layout
          navbar={<CustomNavbar />}
          pageMap={await getPageMap()}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          docsRepositoryBase="https://github.com/Takib-Ahmed/thrivext/tree/development"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
