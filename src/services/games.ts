export async function getGames(genre?: string, page: number = 1) {
  const params = new URLSearchParams();
  if (genre) params.append("genre", genre);
  params.append("page", page.toString());

  const res = await fetch(
    `http://localhost:3000/api/games?${params.toString()}`,
    {
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}
