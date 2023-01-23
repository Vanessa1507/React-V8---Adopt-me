import { renderToReadableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

const render = (url, opts) => {
  const stream = renderToReadableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );
  return stream;
};

export default render;
