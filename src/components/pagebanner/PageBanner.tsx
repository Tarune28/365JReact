// Imports
import React from "react";

// Stylesheets
import "./PageBanner.css";

function PageBanner(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; image: any; subtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <section
      className="page-banner"
      style={{
        background:
          props.title != ""
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image}) no-repeat scroll center center`
            : `url(${props.image}) no-repeat cover scroll center center`,
      }}
    >
      <div className="container" style={{ flexWrap: "wrap" }}>
        <h1 className="title margin-top-5">{props.title}</h1>
        <h3 className="subheadings">{props.subtitle}</h3>
        <nav aria-label="breadcrumb" className="banner-breadcrumb"></nav>
      </div>
    </section>
  );
}

export default PageBanner;
