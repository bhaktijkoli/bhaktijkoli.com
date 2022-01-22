import { createClient } from "contentful";

const useClient = () => {
  const client = createClient({
    space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
  });
  return client;
};

export default useClient;
