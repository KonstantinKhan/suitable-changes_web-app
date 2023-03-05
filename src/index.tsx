import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./components/app/App"
import "./styles/style.sass"
import PrimeReact from "primereact/api"

PrimeReact.ripple = true

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <App/>
)
