"use client";

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
