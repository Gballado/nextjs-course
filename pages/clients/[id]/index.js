import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProject() {
    // Load data
    // router.replace - makes the user not able to go back
    router.push('/clients/max/projecta');
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
