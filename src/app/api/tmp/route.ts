export async function GET(request: Request) {
  const res = await Promise.resolve("hello");

  return Response.json({ res });
}
