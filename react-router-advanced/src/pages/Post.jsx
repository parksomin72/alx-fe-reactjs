import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return <h1>Showing Post #{id}</h1>;
}
