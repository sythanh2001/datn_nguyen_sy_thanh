"use client";

import { ProductCard } from "@/components/Product/ProductCard";
import { addToCart } from "@/components/Redux/GlobalSlice";
import { RootState } from "@/components/Redux/Store";
import { artStyles, tags } from "@/ultil/artData";
import axios from "axios";
import test from "node:test";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { text } from "stream/consumers";
import { v4 } from "uuid";
import fuzzysort from "fuzzysort";
import { array_move } from "@/ultil/ultil";
export interface IPostersProps {}

const orientationOptions = ["Tất cả", "Dọc", "Ngang"];
function OrientationFilter() {
  return (
    <div className="mb-5">
      <label className="text-lg">Chiều:</label>
      {orientationOptions.map((x) => (
        <div key={v4()} className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-5">{x}</span>
            <input
              type="radio"
              name="radio-10"
              value={x}
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
      ))}
    </div>
  );
}
interface Choice {
  text: string;
  checked: boolean;
}
function CollapseChoicesFilter({
  title,
  data,
  onChange,
  multipleChoice,
  defaultOpen = true,
  numShowMin = 10,
}: {
  title: string;
  data: string[];
  onChange?: (choices: Choice[]) => any;
  multipleChoice?: boolean;
  defaultOpen?: boolean;
  numShowMin?: number;
}) {
  const [showAll, setShowAll] = useState(false);
  const [choices, setChoices] = useState<Choice[]>(
    data.map((x) => ({ text: x, checked: false }))
  );

  const sortSearch = useCallback(
    (text: string) => {
      return fuzzysort.go(text, choices, { key: "text", all: true });
    },
    [choices]
  );

  const [sorted, setSorted] = useState(sortSearch(""));

  const refSearchInput = useRef() as MutableRefObject<HTMLInputElement>;

  const toggleChoice = (choiceChange: string) => {
    const listChecked: Choice[] = [];
    const newChoices: Choice[] = choices.map((x) => {
      if (!multipleChoice) {
        if (x.text == choiceChange) {
          x.checked = !x.checked;
        } else {
          x.checked = false;
        }
      } else {
        if (x.text == choiceChange) {
          x.checked = !x.checked;
        }
      }
      x.checked && listChecked.push(x);
      return x;
    });
    setChoices(newChoices);
    if (onChange) {
      onChange(listChecked);
    }
  };

  return (
    <div className="collapse bg-base-200 mb-5">
      <input type="checkbox" defaultChecked={defaultOpen} />
      <div className="collapse-title text-lg">{title}</div>
      <div className="collapse-content">
        <input
          type="text"
          ref={refSearchInput}
          placeholder="Tìm"
          onChange={(e) => setSorted(sortSearch(e.target.value))}
          className="input input-bordered input-xs w-full"
        />
        {choices &&
          sorted.slice(0, showAll ? sorted.length : numShowMin).map((item) => {
            return (
              <div key={v4()} className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">{item.obj.text}</span>
                  <input
                    type="checkbox"
                    checked={item.obj.checked}
                    className="checkbox checkbox-accent"
                    value={item.obj.text}
                    onChange={(e) => toggleChoice(e.target.value)}
                  />
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default function Posters(props: IPostersProps) {
  const [products, setProducts] = useState<any[]>();
  useEffect(() => {
    axios.get("http://localhost:3000/api/search").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const tagsFilterChange = (choices: Choice[]) => {
    console.log(
      "🚀 ~ file: page.tsx:112 ~ consttagsFilterChange ~ choices:",
      choices
    );
  };
  return (
    <div>
      <div className="flex content-center">
        {/* todo mark */}
        <div className="w-full">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>posters</a>
              </li>
              <li>all</li>
            </ul>
          </div>
        </div>

        <div className="flex-none">
          <b className="text-center">Xếp Theo: </b>
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary>Bán chạy</summary>
                <ul className=" bg-base-100 z-[100] w-32">
                  <li>
                    <a>Bán chạy</a>
                  </li>
                  <li>
                    <a>Liên quan</a>
                  </li>
                  <li>
                    <a>Mới nhất</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="w-3/12">
          <div className="flex flex-col"></div>
          <OrientationFilter></OrientationFilter>
          <CollapseChoicesFilter
            title="Phong Cách"
            data={artStyles}
            onChange={tagsFilterChange}
          ></CollapseChoicesFilter>
          <CollapseChoicesFilter
            title="Thẻ"
            data={tags}
            multipleChoice={true}
            defaultOpen={false}
            onChange={tagsFilterChange}
          ></CollapseChoicesFilter>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {products &&
            products.map((item) => (
              <ProductCard
                key={v4()}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                tag={[item.artStyle]}
              ></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
}
