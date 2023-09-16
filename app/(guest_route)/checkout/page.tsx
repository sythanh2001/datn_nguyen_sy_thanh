"use client";

export interface ICheckoutProps {}

export default function Checkout(props: ICheckoutProps) {
  const data = {
    data: [
      {
        id: 5387455,
        itemCollectionId: 6308187,
        collection: {
          id: 456735,
          name: "Japanese Nature Neon Art",
          url: "/jaydesignz/japanese-nature-neon-art",
        },
        title: "Cherry Blossom Japan Art",
        imageUrl:
          "https://static.displate.com/280x392/displate/2023-03-03/afdfcd5380d9f8e90b5b9b579229a122_999f277e8239a1a3962b6cc8a2bdfb68.jpg",
        artStyle: "illustration",
        orientation: "vertical",
        exclusive: false,
        multiplate: false,
        price: {
          amount: 44,
          currency: null,
          formatted: null,
        },
        author: {
          id: 4160766,
          fullName: "Jay ",
          nick: "jaydesignz",
        },
      },
      {
        id: 5588079,
        itemCollectionId: 6511789,
        collection: {
          id: 466811,
          name: "Neon Anime",
          url: "/beart/neon-anime",
        },
        title: "Cat Girl Blue Neon Anime ",
        imageUrl:
          "https://static.displate.com/280x392/displate/2023-04-28/f82187ff1933b78edb5cc1437a54b916_e70d7f101c6eed8770654e3678a38f6e.jpg",
        artStyle: "illustration",
        orientation: "vertical",
        exclusive: false,
        multiplate: false,
        price: {
          amount: 44,
          currency: null,
          formatted: null,
        },
        author: {
          id: 253293,
          fullName: "hassen bouchemma",
          nick: "BeArt",
        },
      },
      {
        id: 5097358,
        itemCollectionId: 6012202,
        collection: {
          id: 440365,
          name: "Memes",
          url: "/davincilegacy/memes",
        },
        title: "Bold brush meme",
        imageUrl:
          "https://static.displate.com/280x392/displate/2022-12-06/53e51c45fe782e62c09ec4a0e0aeea3b_89a277b3927e688a3b1711447556d065.jpg",
        artStyle: "illustration",
        orientation: "vertical",
        exclusive: false,
        multiplate: false,
        price: {
          amount: 44,
          currency: null,
          formatted: null,
        },
        author: {
          id: 1208574,
          fullName: "Trending  Displate Posters",
          nick: "davincilegacy",
        },
      },
      {
        id: 5183977,
        itemCollectionId: 6101072,
        collection: {
          id: 432971,
          name: "Jujutsu",
          url: "/arthurart/jujutsu",
        },
        title: "Gojo and Geto",
        imageUrl:
          "https://static.displate.com/280x392/displate/2023-01-04/c66368201e2e67cb4637e8f0a94dc1d7_7f376c5f28598dd3702a4f6c1c8a6458.jpg",
        artStyle: "illustration",
        orientation: "vertical",
        exclusive: false,
        multiplate: false,
        price: {
          amount: 44,
          currency: null,
          formatted: null,
        },
        author: {
          id: 3409880,
          fullName: "Arthur Henry",
          nick: "arthurart",
        },
      },
      {
        id: 5585154,
        itemCollectionId: 6508690,
        collection: {
          id: 458313,
          name: "Pirate Ship",
          url: "/atlasmcguire/pirate-ship",
        },
        title: "pirate ship landscape",
        imageUrl:
          "https://static.displate.com/280x392/displate/2023-04-27/0a6e4d721204b80d4c3172bb25d1fde0_f5a227b0f8ee1f28e43d0a25fca0547f.jpg",
        artStyle: "illustration",
        orientation: "vertical",
        exclusive: false,
        multiplate: false,
        price: {
          amount: 44,
          currency: null,
          formatted: null,
        },
        author: {
          id: 1186764,
          fullName: "Atlas Mcguire ",
          nick: "atlasmcguire",
        },
      },
    ],
  };
  return <div className="break-words">{JSON.stringify(data, null, 2)}</div>;
}
