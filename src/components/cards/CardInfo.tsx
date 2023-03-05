import {FC} from "react"

interface IProps {
    name: string
}

export const CardInfo: FC<IProps> = (props) => {

    const {name} = props

    return (
        <div
            className="col-12 lg:col-4"
        >
            <div className="border-round-lg p-2 border-1 border-solid border-blue-300">
                {name}
            </div>
        </div>
    )
}