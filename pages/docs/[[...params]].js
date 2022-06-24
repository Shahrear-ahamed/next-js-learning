import { useRouter } from "next/router";

export default function Docs() {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);

  // conditional page render
  if (params.length === 2) {
    return (
      <h1>
        This is feature {params[0]} page of concept {params[0]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>This is features {params[1]}</h1>;
  }
  return <h1>This is Docs home page</h1>;
}
