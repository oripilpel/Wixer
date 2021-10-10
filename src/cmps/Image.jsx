import { useEffect, useState } from "react"
import { Loader } from "../assets/img/Loader"

export function Image({ data, style }) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => { setIsLoading(true) }, [data.url])

    return (
        <>
            {isLoading && <Loader />}
            {< img
                src={data.url}
                onLoad={() => { setIsLoading(false) }} alt={data.alt || ""}
                style={{ ...style, display: (isLoading) ? 'none' : 'unset' }}
            />}
        </>
    )
}