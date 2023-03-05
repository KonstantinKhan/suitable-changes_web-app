import React, {FC} from "react"
import {CardInfo} from "../cards/CardInfo"

export const App: FC = () => {
    return (
        <div
            // className="flex"
        >
            <div
                className="grid m-2"
            >
                <CardInfo name="Белки"/>
                <CardInfo name="Жиры"/>
                <CardInfo name="Углеводы"/>
            </div>
        </div>
    )
}