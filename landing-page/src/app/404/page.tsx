import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1
        className="text-black"
        style={{ fontSize: "4rem", marginBottom: "1rem" }}
      >
        404
      </h1>
      <p
        className="text-black"
        style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
      >
        Oops! The page you&apos;re looking for can&apos;t be found.
      </p>
      <Link href="/">
        <div
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#E4A11B",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Go Back Home
        </div>
      </Link>
    </div>
  );
}
