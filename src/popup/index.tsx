import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "~/routes";

import "~/style.css";

function IndexPopup() {
  const router = createMemoryRouter(routes);
  return (
    <div className="text-violet-800 min-w-[300px] max-h-[500px] flex flex-col items-center justify-center overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default IndexPopup;
