"use client";

import { getGames } from "@/services/games";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GameCard from "@/components/GameCard";
import GenreSelector from "@/components/GenreSelector";
import Modal from "@/components/Modal";

export default function Home({
  searchParams,
}: {
  searchParams?: { genre?: string; page?: string };
}) {
  // const games = await getGames();
  // console.log(games);

  const genre = searchParams?.genre || "";
  const page = parseInt(searchParams?.page || "1", 10);
  // const {totalPages, currentPage } = await getGames(genre, page)

  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState(genre);
  const [games, setGames] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(page);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const response = await getGames(selectedGenre, currentPage);
      const { games, totalPages, currentPage: responsePage } = response;
      setGames(games);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
      setLoading(false);
    };

    fetchGames();
  }, [selectedGenre, currentPage]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1);

    const params = new URLSearchParams();
    params.set("genre", event.target.value);
    params.set("page", "1");

    router.push(`/?${params.toString()}`);
  };

  const handleAddToCart = (game: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const alreadyInCart = existingCart.find((item: any) => item.id === game.id);
    if (!alreadyInCart) {
      const updatedCart = [...existingCart, game];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setModalContent({
        title: "Juego agregado ✅",
        message: `${game.name} fue añadido a tu carrito.`,
      });
    } else {
      setModalContent({
        title: "Ya está en el carrito 🛒",
        message: `${game.name} ya fue añadido anteriormente.`,
      });
    }
    setShowModal(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl">
      <div className="p-4">
        <GenreSelector
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
        />

        <div className="-mx-24">
          <hr className="w-screen border-t-2 border-[#efedf3] my-6 mb-16" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-800"></div>
          </div>
        ) : (
          <div className="flex justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {games.map((game: any) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
    </main>
  );
}
