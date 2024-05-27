// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { OGPProps } from "./interface";

const OGP = ({
  title,
  image,
  keywords,
  description,
  og_url,
  site_name,
}: OGPProps) => {
  return (
    <Helmet>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta property="og:image" name="og:image" content={image} />
      <meta property="og:title" name="og:title" content={title} />
      <meta
        property="og:description"
        name="og:description"
        content={description}
      />
      <meta property="og:url" name="og:url" content={og_url} />
      <meta property="og:site_name" name="og:site_name" content={site_name} />
      <meta property="og:type" name="og:type" content="website" />
      {/*<meta property="og:image:width" content="1200px"/>*/}
      {/*<meta property="og:image:width" content="627px"/>*/}

      <meta
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" property="twitter:site" content={site_name} />
      <meta name="twitter:title" property="twitter:title" content={title} />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta name="twitter:image" property="twitter:image" content={image} />
      <meta
        name="twitter:image:src"
        property="twitter:image:src"
        content={image}
      />
    </Helmet>
  );
};

export default OGP;

export const OGPProvider = HelmetProvider;
