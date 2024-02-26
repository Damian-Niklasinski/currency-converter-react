import { Paragraph } from "./styled"
import { useCurrentDate } from "./useCurrentDate";


export const Clock = () => {

    const date = useCurrentDate();

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

