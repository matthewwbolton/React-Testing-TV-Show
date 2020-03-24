import React from "react";
import { render, rerender } from "@testing-library/react";
import Episodes from "./Episodes";

const episodeData = [
  {
    id: 578668,
    url:
      "http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
    name: "Chapter Seven: The Bathtub",
    season: 1,
    number: 7,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg"
    },
    summary:
      "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578668"
      }
    }
  },
  {
    id: 578669,
    url:
      "http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down",
    name: "Chapter Eight: The Upside Down",
    season: 1,
    number: 8,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg"
    },
    summary:
      "<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578669"
      }
    }
  }
];

test("does the Episodes component render", () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId(/episodes/i)).toHaveLength(0);
});

test("does the Episode component render with sample data", () => {
  const { queryAllByTestId } = render(<Episodes episodes={episodeData} />);

  expect(queryAllByTestId(/episodes/i)).toHaveLength(2);
});
