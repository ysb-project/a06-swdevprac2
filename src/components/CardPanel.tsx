'use client'
import Card from "./Card";
import { useReducer } from "react";

export default function CardPanel(){
    const compareReducer = (
        state: { compareList: Set<string>; compareMap: Map<string, number> },
        action: { type: "add" | "remove"; venueName: string; rating?: number }
    ) => {
        switch (action.type) {
            case "add": {
                const newList = new Set(state.compareList).add(action.venueName);
                const newMap = new Map(state.compareMap).set(action.venueName, action.rating ?? 0);
                return { compareList: newList, compareMap: newMap };
            }
            case "remove": {
                const newList = new Set(state.compareList);
                newList.delete(action.venueName);
                const newMap = new Map(state.compareMap);
                newMap.delete(action.venueName);
                return { compareList: newList, compareMap: newMap };
            }
            default:
                return state;
        }
    };

    const [{ compareList, compareMap }, dispatchCompare] = useReducer(compareReducer, {
        compareList: new Set<string>(),
        compareMap: new Map<string, number>(),
    });

    return (
        <div className="m-[30px] flex flex-col gap-y-[30px]">
            <div className="flex flex-row gap-[30px] justify-around flex-wrap">
                <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"
                    onCompare={(venue: string, rating: number) =>
                        dispatchCompare({ type: 'add', venueName: venue, rating })}
                />
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"
                    onCompare={(venue: string, rating: number) =>
                        dispatchCompare({ type: 'add', venueName: venue, rating })}
                />
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"
                    onCompare={(venue: string, rating: number) =>
                        dispatchCompare({ type: 'add', venueName: venue, rating })}
                />
            </div>
            <div className="w-full h-auto text-xl text-white font-mono font-medium">
                Venue List with Ratings : {compareList.size}
            </div>
            {Array.from(compareList).map((venue) => (
                <div key={venue}
                data-testid={venue}
                    onClick={() => dispatchCompare({ type: 'remove', venueName: venue})}
                >
                    {venue} : {compareMap.get(venue)}
                </div>
            ))}
        </div>
    )
}