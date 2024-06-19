import { parseISO, format } from "date-fns";

export default function Date({ dateString }: {
    dateString: any
}) {
    const date = parseISO(dateString)
    return (
        <time>{format(date, 'LLLL d HH:mm')}</time>
    )
}