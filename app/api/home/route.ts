import { NextResponse } from 'next/server'
 
export async function GET() {
  const data = {
    heros: [
      {
        title: "Connecting the Nation throught the fisheries supply cain",
        src: "fish-1.jpg",
      },
      {
        title: "Connecting the Nation throught the fisheries supply cain",
        src: "fish-2.jpg",
      },
      {
        title: "Connecting the Nation throught the fisheries supply cain",
        src: "fish-3.jpg",
      },
    ],
    summary: {
      title: 'Strengthening the fisheries Supply Chain, Together',
      about: [
        {
          id: 1,
          image: "/images/fish-1.jpg",
          title: "Fostering a sustainable fisheries ecosystem in Indonesia",
        },
        {
          id: 2,
          image: "/images/fish-2.jpg",
          title: "Assisting in reducing food loss in the fisheries industry",
        },
        {
          id: 3,
          image: "/images/fish-3.jpg",
          title: "Fostering a sustainable fisheries ecosystem in Indonesia",
        },
      ],
      feature: [
        {
          title: "Lorem Ipsim dolor 1",
          description: "FishLog belives that we have found the key to tackling world food loss. Hurdles and challenges are still upon us if we are to truly optimize the impacts of the seafood sector.",
          icon: "user"
        },
        {
          title: "Lorem Ipsim dolor 2",
          description: "FishLog belives that we have found the key to tackling world food loss. Hurdles and challenges are still upon us if we are to truly optimize the impacts of the seafood sector.",
          icon: "home"
        },
        {
          title: "Lorem Ipsim dolor 3",
          description: "FishLog belives that we have found the key to tackling world food loss. Hurdles and challenges are still upon us if we are to truly optimize the impacts of the seafood sector.",
          icon: "home"
        }
      ],
      mainFeature: {
        title: 'Fishlog Ecosystem Partnerts Benefits',
        description: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            porro magni, doloribus maxime commodi dicta saepe ad
            voluptates ex corporis recusandae repellat architecto ab
            facere. Totam voluptas repellat modi suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            porro magni, doloribus maxime commodi dicta saepe ad
            voluptates ex corporis recusandae repellat architecto ab
            facere. Totam voluptas repellat modi suscipit.
          </p>
        `
      }
    },
    impact: [
      {
        title: "+20,000 mT",
        description: "Lorem ipsum dolor fishlog dolor menu indonesia ipsum code"
      },
      {
        title: "+50,000 mT",
        description: "Lorem ipsum dolor fishlog dolor menu indonesia ipsum code"
      },
      {
        title: "+4,000 mT",
        description: "Lorem ipsum dolor fishlog dolor menu indonesia ipsum code"
      }
    ],
    companion: [
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'},
      { src: 'fishlog-academy.png'}
    ]
  }
 
  return NextResponse.json({ data })
}