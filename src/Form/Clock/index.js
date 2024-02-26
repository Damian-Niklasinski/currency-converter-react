import { useEffect, useState } from "react";
import { Paragraph } from "./styled"


export const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }

    });

    

    return (
        <>
            <Paragraph>
                Dzisiaj jest {""}
                {date.toLocaleString("pl-PL",
                    {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                    })}
            </Paragraph>
        </>
    )
}

